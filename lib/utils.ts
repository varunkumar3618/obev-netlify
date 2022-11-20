
export function incrementPid(pid: string, numPoems: number) {
    const pidInt = parseInt(pid)
    if (pidInt == numPoems) {
        return null
    } else {
        return (pidInt + 1).toString()
    }
}

export function decrementPid(pid: string) {
    const pidInt = parseInt(pid)
    if (pidInt == 1) {
        return null
    } else {
        return (pidInt - 1).toString()
    }
}
