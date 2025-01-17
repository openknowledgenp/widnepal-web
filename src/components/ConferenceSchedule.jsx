import { h } from 'preact';
import schedule from '/public/data/schedule.json'; // Import JSON file

const ConferenceSchedule = () => {
  return (
    <section class="relative h-fit w-screen items-center justify-center text-black overflow-hidden">
    <div className="px-4 py-20 text-center z-10 mt-16">
      <h1 className="text-2xl text-black font-bold text-center mb-6 mt-8 mx-auto">
        Women in Data Conference 2025 Schedule
      </h1>
      <table className="table-auto mx-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Time
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Session
            </th>
            {/* <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Description
            </th> */}
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">
                {item.time}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">
                {item.session}
              </td>
              {/* <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">
                {item.description || 'N/A'}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default ConferenceSchedule;
