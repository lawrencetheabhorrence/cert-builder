const express = require('express')
const app = express()
const cors = require('cors')
const ejs = require('ejs')
const fs = require('fs')
const puppeteer = require('puppeteer')
app.use(cors())
app.use(express.json())

const printPDF = async () => {
  const browser = await puppeteer.launch({ headless: true, executablePath: '/usr/bin/chromium' })
  const page = await browser.newPage()
  await page.goto('file:///run/media/laurents/2cd06813-b2a2-4968-9627-6ee323bf3cbb/home/julyanna/GitHub/cert-builder/backend/template.html', {waitUntil: 'networkidle0'})
  const pdf = await page.pdf({ format: 'A4' })

  await browser.close();
  return pdf;
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.post('/', async (req, res) => {
  console.log(req.body)
  const html = await ejs.renderFile(req.body.templateFile, req.body.data, {async: true})
  fs.writeFile('./template.html', html, { flag: 'w' }, (err) => {
  if (err) throw err;
  console.log('Saved!');
  })

  const pdf = await printPDF()
  res.set({ 'Content-Type': 'application/pdf', 'Content-Lenght': pdf.length })
  res.send(pdf)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})