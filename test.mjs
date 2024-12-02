async function test() {
    const res = await fetch("https://translate.siguiente-cloud.workers.dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: "hola. im a walrus by the name of Fred."
        })
    })

    return res.json()
}

(await test()).then(console.info)