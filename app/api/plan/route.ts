// app/api/plan/route.ts
import { NextResponse } from 'next/server'

const fakePlan = [
  'Sure! Here’s a simple breakdown to help you achieve your goal:',
  '\n\n1. **Clarify the objective** → Define exactly what you want to accomplish and why it matters.',
  '\n\n2. **Divide into milestones** → Break the goal into 3–5 key phases, each with a specific deliverable.',
  '\n\n3. **Set timelines** → Assign realistic deadlines to each phase based on effort and priority.',
  '\n\n4. **Identify resources** → List any tools, people, or knowledge needed at each stage.',
  '\n\n5. **Take action** → Begin executing step-by-step while tracking progress along the way.',
  '\n\n6. **Review & adjust** → Reflect weekly, make adjustments, and stay aligned with the big picture.',
  '\n\nWould you like me to turn this into a calendar or checklist format? ✅'
]

export async function POST() {
  const stream = new ReadableStream({
    start(controller) {
      let i = 0
      const id = setInterval(() => {
        controller.enqueue(fakePlan[i])
        i++
        if (i === fakePlan.length) {
          clearInterval(id)
          controller.close()
        }
      }, 600) // delays each chunk for realism
    }
  })

  return new NextResponse(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}
