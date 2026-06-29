'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export const MonthSelect = () => {
    const router = useRouter()
    const params = useSearchParams()

    const currentMonth = params.get('month') ?? '01'

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        router.push(`/?month=${e.target.value}`)
    }

    return (
        <select value={currentMonth} onChange={handleChange} className="bg-[#0B1326] text-sm text-[#F1F5F9] rounded-lg py-2 px-3">
            <option value="01">Janeiro</option>
            <option value="02">Fevereiro</option>
            <option value="03">Março</option>
            <option value="04">Abril</option>
            <option value="05">Maio</option>
            <option value="06">Junho</option>
            <option value="07">Julho</option>
            <option value="08">Agosto</option>
            <option value="09">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
        </select>
    )
}