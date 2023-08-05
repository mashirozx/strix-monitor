'use client';

import IntelCoreI9SVG from '@/assets/cpu/intel-core-i9.svg';
import NvidiaRtxSVG from '@/assets/gpu/nvidia-rtx.svg';
import RogSVG from '@/assets/mb/rog.svg';
import { useWs } from '@/hooks/useWs';
import { keepDigit, keepIntNumberStringDigit } from '@/utils/math';
import { useMemo, type FunctionComponent } from 'react';
import Group from './_Group';

const ThemeDigit: FunctionComponent = () => {
  const { data } = useWs();

  const cpuClock = useMemo(() => {
    const clock = Number(data?.SCPUCLK.value) / 1024;

    return isNaN(clock) ? undefined : String(keepDigit(clock, 2));
  }, [data?.SCPUCLK.value]);

  const gpuClock = useMemo(() => {
    const clock = Number(data?.SGPU1CLK.value) / 1024;

    return isNaN(clock) ? undefined : String(keepDigit(clock, 2));
  }, [data?.SGPU1CLK.value]);

  const gpuMemoryUsage = useMemo(() => {
    const used = Number(data?.SGPU1USEDDEMEM.value) / 1024;
    const usage = (Number(data?.SGPU1USEDDEMEM.value) / (24 * 1024)) * 100;

    return {
      used: isNaN(used) ? undefined : String(keepDigit(used, 1)),
      usage: isNaN(usage) ? undefined : String(usage),
    };
  }, [data?.SGPU1USEDDEMEM.value]);

  const usedMemory = useMemo(() => {
    const used = Number(data?.SUSEDMEM.value);
    const free = Number(data?.SFREEMEM.value);
    const total = (used + free) / 1024;

    return {
      total: isNaN(total) ? undefined : String(keepDigit(total, 1)),
      used: isNaN(used) ? undefined : String(keepDigit(used / 1024, 1)),
    };
  }, [data?.SFREEMEM.value, data?.SUSEDMEM.value]);

  return (
    <>
      <div className="flex flex-row gap-3">
        {/* CPU */}
        <Group
          normaFactors={[
            {
              number: cpuClock,
              unit: 'GHz',
              label: 'CPU Clock',
            },
            {
              number: data?.SCPUUTI.value,
              unit: '%',
              label: 'CPU Utilization',
            },
            {
              number: data?.FCPU.value,
              unit: 'RPM',
              label: 'AIO Fan',
            },
            {
              number: data?.FAIOPUMP.value,
              unit: 'RPM',
              label: 'AIO Bump',
            },
            {
              number: keepIntNumberStringDigit(data?.PCPU.value),
              unit: 'W',
              label: 'CPU Power',
            },
            {
              number: data?.TCPU.value,
              unit: '°C',
              label: 'CPU Temperature',
            },
          ]}
          specialFactor={{}}
          logo={<IntelCoreI9SVG className="w-56" />}
        />

        {/* GPU */}
        <Group
          normaFactors={[
            {
              number: gpuClock,
              unit: 'GHz',
              label: data?.SGPU1CLK.label,
            },
            {
              number: keepIntNumberStringDigit(data?.PGPU1.value),
              unit: 'W',
              label: 'GPU Power',
            },
            {
              number: keepIntNumberStringDigit(data?.SGPU1UTI.value, 1),
              unit: '%',
              label: 'GPU Utilization',
            },
            {
              number: data?.FGPU1.value,
              unit: 'RPM',
              label: 'GPU Fan',
            },
            {
              number: keepIntNumberStringDigit(gpuMemoryUsage.usage, 1),
              unit: '%',
              label: 'GPU MEM Usage',
              total: `${gpuMemoryUsage.used} / 24 Gb`,
            },
            {
              number: data?.TGPU1.value,
              unit: '°C',
              label: 'GPU Temperature',
            },
          ]}
          specialFactor={{}}
          logo={<NvidiaRtxSVG className="w-56" />}
        />

        {/* mother board */}
        <Group
          normaFactors={[
            {
              number: data?.SMEMUTI.value,
              unit: '%',
              label: 'MEM Utilization',
              total: `${usedMemory.used} / ${usedMemory.total} Gb`,
            },
            {
              number: data?.SRTSSFPS.value,
              label: 'RTSS FPS',
            },
            {
              number: data?.SNIC3ULRATE.value,
              unit: 'Kb/s',
              label: 'Upload Speed',
            },
            {
              number: data?.SNIC3DLRATE.value,
              unit: 'Kb/s',
              label: 'Download Speed',
            },
            {
              number: data?.SPRIIPADDR.value,
              label: 'Intranet IP',
            },
            {
              number: data?.TMOBO.value,
              unit: '°C',
              label: 'MB Temperature',
            },
          ]}
          specialFactor={{}}
          logo={<RogSVG className="w-56" />}
        />
      </div>
    </>
  );
};

export default ThemeDigit;
