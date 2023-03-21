export default async function handler(req, res) {
    // FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
    let memory = [];
    for (let i = 0; i < 100000000; i++) {
        if (i % 1000000 === 0) {
            console.log("Memory size: " + memory.length);
        }

        memory.push(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${i}`);
    }

    res.status(200).json({ memory: memory.length });
}
  