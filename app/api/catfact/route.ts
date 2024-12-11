import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Get the path of the json file
    const jsonDirectory = path.join(process.cwd(), 'data')
    // Read the json file
    const fileContents = await fs.readFile(jsonDirectory + '/catFacts.json', 'utf8')
    // Parse the file contents into an object
    const facts = JSON.parse(fileContents)

    // Get a random fact
    const randomIndex = Math.floor(Math.random() * facts.facts.length)
    const fact = facts.facts[randomIndex]

    return new Response(JSON.stringify({ fact }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error fetching cat fact:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch cat fact' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

