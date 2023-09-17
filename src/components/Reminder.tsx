
import getReminderList from "@/lib/reminder"
import Indicator from "./Indicator"
export default async function Reminder() {
    const {ok,data} = await getReminderList()
    const content = !ok? <></> : (
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <Indicator length={data.length} >
                    <div tabIndex={0} className="btn btn-ghost btn-md">Reminder</div>
                </Indicator>
                <div tabIndex={0} className="mt-3 z-[1] card  dropdown-content w-max bg-base-100 shadow bg-accent">
                    <ReminderList data={data} />
                </div>

            </div>
        </div>
    )
    return content
}

async function ReminderList({ data }: { data: Reminder[] }) {
    const content = data.length && data.map((reminder: Reminder) => {
        const slotData = {
            shortMessage: reminder.book_title + 'last due date:' + reminder.last_date,
            longMessage: reminder.book_title + reminder.fine
        }
        return <ReminderSlot key={reminder.book_title} data={slotData} />
    })

    return content
}

type Slot = {
    shortMessage: string,
    longMessage: string,
}
function ReminderSlot({ data }: { data: Slot }) {
    return (
        <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content m-1">
            <div className="collapse-title">
                {data.shortMessage}
            </div>
            <div className="flex collapse-content">
                <p>{data.longMessage}</p>
                <button className="btn btn-sm m-2">delete</button>
            </div>
        </div>
    )
}

