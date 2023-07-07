import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        "result": "Ok",
        "data": {
            "projectId": "1",
            "projectName": "This is nice"
        }
    }

    return NextResponse.json(data)
}