
import React, { useState } from "react";

const mockData = [
  {
    uid: "gope78",
    name: "우낙중",
    처리건수: 26,
    총배달료: 104120,
    필요경비: 19887,
    정산금액: 100172,
    소득세: 3124,
    주민세: 312,
    지급금액: 96736,
  },
  {
    uid: "redy8383",
    name: "정태영",
    처리건수: 8,
    총배달료: 34660,
    필요경비: 6620,
    정산금액: 33411,
    소득세: 1040,
    주민세: 104,
    지급금액: 32268,
  },
];

export default function RiderPortal() {
  const [userId, setUserId] = useState("");
  const [rider, setRider] = useState(null);

  const handleLogin = () => {
    const found = mockData.find((r) => r.uid === userId);
    setRider(found || null);
  };

  const numberWithCommas = (x) => x.toLocaleString();

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <img src="/logo.png" alt="logo" className="h-10 mx-auto" />
      <h2 className="text-center text-2xl font-bold">배민커넥트 정산 마이페이지</h2>

      {!rider ? (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="User ID 입력"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            로그인
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{rider.name}님의 정산 내역</h3>
          <table className="table-auto w-full text-sm">
            <tbody>
              {Object.entries(rider).map(([key, val]) => (
                key !== "uid" &&
                <tr key={key}>
                  <td className="border p-2 font-medium bg-gray-100">{key}</td>
                  <td className="border p-2 text-right">{typeof val === "number" ? numberWithCommas(val) : val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
