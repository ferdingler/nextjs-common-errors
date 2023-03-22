export default async function handler(req, res) {
    // FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
    let arr = []
    while (true) {
        arr.push(new Array(1024 * 1024)) // Allocating 1MB at a time
    }
}
  