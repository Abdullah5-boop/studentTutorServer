import { prisma } from "../lib/prisma"
import app from "../app";
async function main() {
    let port = process.env.PORT || 5001
    try{
        prisma.$connect()
        console.log("Connected to the database successfully!")
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    }
    catch(error){
        console.error("Error connecting to the database:", error)
        prisma.$disconnect()
    }   
} main()