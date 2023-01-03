// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readdir, readFile } from 'node:fs/promises';

export default async function handler(req, res) {
  const files = await readdir('pages/data/service');
  const services = [];
  for(let i=0;i<files.length;i++) {
    const filepath = files[i];
    const filedata = await readFile(`pages/data/service/${filepath}`, 'utf-8');
    services.push(JSON.parse(filedata));
  }
  res.status(200).json({services})
}