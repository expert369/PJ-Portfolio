import { Timeline } from "@/components/ui/timeline";
import { data } from "@/constants/rootpage";

export default function Experience() {
  return (
    <div className="mb-8 mx-20 max-sm:mx-10 pt-15 max-sm:pt-35 gap-3 z-55 flex flex-col">
        <div className='flex flex-col gap-4 mb-12'>
            <div className='w-40 px-4 py-2 bg-blue-900/20 text-blue-400 rounded-2xl text-sm'>
                Career Timeline
            </div>
            <div className='text-5xl max-sm:text-3xl font-bold'>
                Changelog from my Journey
            </div>
            <div className='text-zinc-600 text-md font-semibold px-2'>
            My professional journey building enterprise applications, automating business processes, and developing scalable software solutions. Each milestone reflects the technologies I&apos;ve mastered, the challenges I&apos;ve solved, and the value I&apos;ve delivered to businesses.
            </div>
            <div className='flex gap-6 text-sm max-sm:grid max-sm:grid-cols-2'>
                <div className='flex gap-2 items-center'>
                    <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                    <div>Current Role</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='h-2 w-2 rounded-full bg-red-500'></div>
                    <div>Frappe/ERPNext Developer</div>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='h-2 w-2 rounded-full bg-green-500'></div>
                    <div>Software Devleper Intern</div>
                </div>
            </div>
        </div>

        <div className="relative overflow-clip">
            <Timeline data={data} />
        </div>
    </div>
  )
}
