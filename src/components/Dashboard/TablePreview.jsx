import avatarGirl from "@/public/images/avatar-girl.webp";
import Image from "next/image";

export default function TablePreview() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800">PROYECTOS</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">BENEFICIARIO</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">PROYECTO</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">CUPR</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">LOCALIDAD</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">INE</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              <tr>
                <td className="p-2">
                  <div className="flex gap-3 items-center">
                    <Image alt="" src={avatarGirl} width={36} height={36} />
                    <div className="text-slate-800">Cristina Robles</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Lamina</div>
                </td>
                <td className="p-2">
                  <div className="text-center">CRJCKAKAK12JAJP</div>
                </td>
                <td className="p-2">
                  <div className="text-center">La junta, Acatlan</div>
                </td>
                <td className="p-2">
                  <div className="text-center">CRJAKAK1O2KASL</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
