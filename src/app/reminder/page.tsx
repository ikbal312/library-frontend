import { AuthenticatedUser } from "@/lib/auth";
import getReminderList from "@/lib/reminder";
import { Metadata } from "next";

export default async function ReminderPage() {
  const res = await getReminderList();
  const auth = await AuthenticatedUser();
  if (!res.ok) return <div>No Reminder</div>;
  const reminders = res.data;
  const table = (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Message</th>
                  <th className="py-3 px-6 text-left">Due Date</th>
                  <th className="py-3 px-6 text-left">fine</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {reminders.map((reminder) => {
                  return (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-normal">
                        <div className="items-center">
                          <span className="font-medium text-start">
                            Return book before due date. you gave borrowed
                            {reminder.book_title} at {reminder.borrowed_at}.
                            when due date passes every day fine will be 10 tk
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left">
                        <div className="items-center">
                          <span className="font-medium">
                            {reminder.last_date}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="items-center">
                          <span className="font-medium ">
                            {reminder.fine} Tk
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  return auth ? table : <></>;
}

export const metadata: Metadata = {
  title: "reminder",
};
