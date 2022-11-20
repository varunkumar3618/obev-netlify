import fs from 'fs'
import { join } from 'path'
import { parse as parse_csv } from 'csv-parse/sync'
import { remark } from 'remark'
import html from 'remark-html'

const dataDirectory = join(process.cwd(), 'data')
const pidTitleFileName = join(dataDirectory, 'pid_title.csv')
const pidTitleFileContents = fs.readFileSync(pidTitleFileName)
const pidTitleRecords = parse_csv(
    pidTitleFileContents,
    {columns: true, skip_empty_lines: true}
)
const pidToTitle = Object.fromEntries(pidTitleRecords.map(
    record=>[record["pid"], record["title"]]
))

export function getNumPoems() {
    return pidTitleRecords.length
}

export function getTitleByPid(pid: string) {
    return pidToTitle[pid]
}

export function getPoemByPid(pid: string) {
    const textFilename = join(dataDirectory, 'poems', pid + '.txt')
    return fs.readFileSync(textFilename, 'utf-8')
}

export function getPoemStanzasByPid(pid: string) {
    const poemText = getPoemByPid(pid)
    const poemStanzas = poemText.split('\n\n')
    return poemStanzas
}

export function getAllPids() {
    return pidTitleRecords.map(record => record["pid"])
}
