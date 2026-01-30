#!/usr/bin/env node
/**
 * Deploy Fleet Dashboard to GitHub Pages
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'keys', 'github.json')))
const TOKEN = CONFIG.accessToken
const OWNER = CONFIG.username
const REPO = 'fleet-dashboard'
const DIR = __dirname

async function run(cmd, options = {}) {
    console.log(`$ ${cmd}`)
    try {
        execSync(cmd, { 
            cwd: DIR, 
            encoding: 'utf8', 
            stdio: 'inherit',
            ...options 
        })
        return true
    } catch (e) {
        console.log(`⚠️  ${e.message}`)
        return false
    }
}

async function deploy() {
    console.log('🚀 Deploying Fleet Dashboard to GitHub Pages')
    console.log('='.repeat(50))
    console.log(`Owner: ${OWNER}`)
    console.log(`Repo: ${REPO}`)
    console.log('')

    // Set token env
    process.env.GH_TOKEN = TOKEN

    // Initialize git if needed
    if (!fs.existsSync(path.join(DIR, '.git'))) {
        console.log('1. Initializing git...')
        run('git init')
        run('git add .')
        run('git commit -m "Initial fleet dashboard"')
    }

    // Create or update repo
    console.log('\n2. Creating/pushing to GitHub...')
    const created = run(`gh repo create ${REPO} --public --source=. --push`)
    
    if (!created) {
        console.log('Pushing to existing repo...')
        run(`git remote add origin https://github.com/${OWNER}/${REPO}.git`)
        run('git push -u origin main')
    }

    // Enable Pages
    console.log('\n3. Enabling GitHub Pages...')
    const pagesEnabled = run(`gh api repos/${OWNER}/${REPO}/pages -X PUT -f source='{"branch":"main","path":"/"}'`)
    
    console.log('\n' + '='.repeat(50))
    console.log('✅ DEPLOYED!')
    console.log('')
    console.log('📋 FINAL STEP - Enable Pages manually:')
    console.log(`   1. Go to: https://github.com/${OWNER}/${REPO}/settings/pages`)
    console.log('   2. Source: Deploy from main branch')
    console.log('   3. Click Save')
    console.log('')
    console.log('🌐 Your dashboard will be live at:')
    console.log(`   https://${OWNER}.github.io/${REPO}/`)
    console.log('')
    console.log('💡 Note: First build takes 1-2 minutes')
}

deploy().catch(console.error)
