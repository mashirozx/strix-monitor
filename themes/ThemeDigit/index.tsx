'use client';

import IntelCoreI9SVG from '@/assets/cpu/intel-core-i9.svg';
import NvidiaRtxSVG from '@/assets/gpu/nvidia-rtx.svg';
import RogSVG from '@/assets/mb/rog.svg';
import { useWs } from '@/hooks/useWs';
import { keepDigit, keepIntNumberStringDigit } from '@/utils/math';
import { moment } from '@/utils/moment';
import { useMemo, type FunctionComponent } from 'react';
import Group from './_Group';
import PercentageUnit from './_PercentageUnit';
import TemperatureUnit from './_TemperatureUnit';

const SVGProps = {
  className: 'w-36 m-3',
};

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

  const clock = useMemo(
    () => moment(data?.STIME.value, 'hh:mm:ss'),
    [data?.STIME.value],
  );

  return (
    <>
      <div className="flex h-screen flex-row gap-3 bg-black p-3">
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
              unit: <PercentageUnit />,
              label: 'CPU Usage',
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
          ]}
          specialFactor={{
            number: data?.TCPU.value,
            unit: <TemperatureUnit />,
            label: '13th Gen Intel(R) Core(TM) i9-13900K',
          }}
          logo={<IntelCoreI9SVG {...SVGProps} />}
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
              number: keepIntNumberStringDigit(data?.SGPU1UTI.value, 1),
              unit: <PercentageUnit />,
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
              number: keepIntNumberStringDigit(data?.PGPU1.value),
              unit: 'W',
              label: 'GPU Power',
            },
          ]}
          specialFactor={{
            number: data?.TGPU1.value,
            unit: <TemperatureUnit />,
            label: 'ROG Strix RTX4090 24G Gaming',
          }}
          logo={<NvidiaRtxSVG {...SVGProps} />}
        />

        {/* mother board */}
        <Group
          normaFactors={[
            {
              number: clock.format('h:mm'),
              unit: clock.format('A'),
              label: 'Clock',
            },
            {
              number:
                data?.SRTSSFPS.value === '0' ? 'N/A' : data?.SRTSSFPS.value,
              label: 'RTSS FPS',
            },
            {
              number: data?.SMEMUTI.value,
              unit: <PercentageUnit />,
              label: 'MEM Usage',
              total: `${usedMemory.used} / ${usedMemory.total} Gb`,
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
            // {
            //   number: data?.SPRIIPADDR.value,
            //   label: 'Intranet IP',
            // },
          ]}
          specialFactor={{
            number: data?.TMOBO.value,
            unit: <TemperatureUnit />,
            label: 'ROG Strix Z790-A Gaming WiFi',
          }}
          logo={<RogSVG {...SVGProps} />}
        />
      </div>
    </>
  );
};

export default ThemeDigit;
