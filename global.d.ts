declare module '*.svg' {
  const content: SVGComponent;
  export default content;
}

declare type SVGComponent = (
  props: React.SVGProps<SVGElement>,
) => React.ReactElement;

declare type Aida64Key = keyof Aida64;

declare type Aida64Value = Aida64[Aida64Key];

declare type Aida64 = {
  SDATE: {
    label: 'Date';
    value: '2023/8/3';
  };
  STIME: {
    label: 'Time';
    value: '21:03:34';
  };
  STIMENS: {
    label: 'Time (HH:MM)';
    value: '21:03';
  };
  SUPTIME: {
    label: 'UpTime';
    value: '02:56:46';
  };
  SCPUCLK: {
    label: 'CPU Clock';
    value: '5500';
  };
  'SCC-1-1': {
    label: 'CPU Core #1 Clock';
    value: '5500';
  };
  'SCC-1-2': {
    label: 'CPU Core #2 Clock';
    value: '5500';
  };
  'SCC-1-3': {
    label: 'CPU Core #3 Clock';
    value: '5500';
  };
  'SCC-1-4': {
    label: 'CPU Core #4 Clock';
    value: '5500';
  };
  'SCC-1-5': {
    label: 'CPU Core #5 Clock';
    value: '5500';
  };
  'SCC-1-6': {
    label: 'CPU Core #6 Clock';
    value: '5500';
  };
  'SCC-1-7': {
    label: 'CPU Core #7 Clock';
    value: '5500';
  };
  'SCC-1-8': {
    label: 'CPU Core #8 Clock';
    value: '5500';
  };
  'SCC-1-9': {
    label: 'CPU Core #9 Clock';
    value: '4300';
  };
  'SCC-1-10': {
    label: 'CPU Core #10 Clock';
    value: '4300';
  };
  'SCC-1-11': {
    label: 'CPU Core #11 Clock';
    value: '4300';
  };
  'SCC-1-12': {
    label: 'CPU Core #12 Clock';
    value: '4300';
  };
  'SCC-1-13': {
    label: 'CPU Core #13 Clock';
    value: '4300';
  };
  'SCC-1-14': {
    label: 'CPU Core #14 Clock';
    value: '4300';
  };
  'SCC-1-15': {
    label: 'CPU Core #15 Clock';
    value: '4300';
  };
  'SCC-1-16': {
    label: 'CPU Core #16 Clock';
    value: '4300';
  };
  'SCC-1-17': {
    label: 'CPU Core #17 Clock';
    value: '4300';
  };
  'SCC-1-18': {
    label: 'CPU Core #18 Clock';
    value: '4300';
  };
  'SCC-1-19': {
    label: 'CPU Core #19 Clock';
    value: '4300';
  };
  'SCC-1-20': {
    label: 'CPU Core #20 Clock';
    value: '4300';
  };
  'SCC-1-21': {
    label: 'CPU Core #21 Clock';
    value: '4300';
  };
  'SCC-1-22': {
    label: 'CPU Core #22 Clock';
    value: '4300';
  };
  'SCC-1-23': {
    label: 'CPU Core #23 Clock';
    value: '4300';
  };
  'SCC-1-24': {
    label: 'CPU Core #24 Clock';
    value: '4300';
  };
  SCPUMUL: {
    label: 'CPU Multiplier';
    value: '55';
  };
  SCPUFSB: {
    label: 'CPU FSB';
    value: '100';
  };
  SNBMUL: {
    label: 'North Bridge Multiplier';
    value: '45';
  };
  SNBCLK: {
    label: 'North Bridge Clock';
    value: '4500';
  };
  SMEMCLK: {
    label: 'Memory Clock';
    value: '3200';
  };
  SMEMSPEED: {
    label: 'Memory Speed';
    value: 'DDR5-6400';
  };
  SDRAMFSB: {
    label: 'DRAM:FSB Ratio';
    value: '32:1';
  };
  SMEMTIM: {
    label: 'Memory Timings';
    value: '32-39-39-102 CR2';
  };
  SMOBONAME: {
    label: 'Motherboard Name';
    value: 'Asus ROG Strix Z790-A Gaming WiFi';
  };
  SBIOSVER: {
    label: 'BIOS Version';
    value: '1202';
  };
  SCPUUTI: {
    label: 'CPU Utilization';
    value: '1';
  };
  SCPU1UTI: {
    label: 'CPU1 Utilization';
    value: '0';
  };
  SCPU2UTI: {
    label: 'CPU2 Utilization';
    value: '0';
  };
  SCPU3UTI: {
    label: 'CPU3 Utilization';
    value: '0';
  };
  SCPU4UTI: {
    label: 'CPU4 Utilization';
    value: '0';
  };
  SCPU5UTI: {
    label: 'CPU5 Utilization';
    value: '0';
  };
  SCPU6UTI: {
    label: 'CPU6 Utilization';
    value: '0';
  };
  SCPU7UTI: {
    label: 'CPU7 Utilization';
    value: '1';
  };
  SCPU8UTI: {
    label: 'CPU8 Utilization';
    value: '0';
  };
  SCPU9UTI: {
    label: 'CPU9 Utilization';
    value: '0';
  };
  SCPU10UTI: {
    label: 'CPU10 Utilization';
    value: '0';
  };
  SCPU11UTI: {
    label: 'CPU11 Utilization';
    value: '1';
  };
  SCPU12UTI: {
    label: 'CPU12 Utilization';
    value: '0';
  };
  SCPU13UTI: {
    label: 'CPU13 Utilization';
    value: '0';
  };
  SCPU14UTI: {
    label: 'CPU14 Utilization';
    value: '0';
  };
  SCPU15UTI: {
    label: 'CPU15 Utilization';
    value: '0';
  };
  SCPU16UTI: {
    label: 'CPU16 Utilization';
    value: '0';
  };
  SCPU17UTI: {
    label: 'CPU17 Utilization';
    value: '0';
  };
  SCPU18UTI: {
    label: 'CPU18 Utilization';
    value: '5';
  };
  SCPU19UTI: {
    label: 'CPU19 Utilization';
    value: '2';
  };
  SCPU20UTI: {
    label: 'CPU20 Utilization';
    value: '2';
  };
  SCPU21UTI: {
    label: 'CPU21 Utilization';
    value: '9';
  };
  SCPU22UTI: {
    label: 'CPU22 Utilization';
    value: '3';
  };
  SCPU23UTI: {
    label: 'CPU23 Utilization';
    value: '0';
  };
  SCPU24UTI: {
    label: 'CPU24 Utilization';
    value: '0';
  };
  SCPU25UTI: {
    label: 'CPU25 Utilization';
    value: '5';
  };
  SCPU26UTI: {
    label: 'CPU26 Utilization';
    value: '0';
  };
  SCPU27UTI: {
    label: 'CPU27 Utilization';
    value: '1';
  };
  SCPU28UTI: {
    label: 'CPU28 Utilization';
    value: '0';
  };
  SCPU29UTI: {
    label: 'CPU29 Utilization';
    value: '2';
  };
  SCPU30UTI: {
    label: 'CPU30 Utilization';
    value: '1';
  };
  SCPU31UTI: {
    label: 'CPU31 Utilization';
    value: '0';
  };
  SCPU32UTI: {
    label: 'CPU32 Utilization';
    value: '0';
  };
  SMEMUTI: {
    label: 'Memory Utilization';
    value: '53';
  };
  SUSEDMEM: {
    label: 'Used Memory';
    value: '17329';
  };
  SFREEMEM: {
    label: 'Free Memory';
    value: '15180';
  };
  SVIRTMEMUTI: {
    label: 'Virtual Memory Utilization';
    value: '78';
  };
  SUSEDVIRTMEM: {
    label: 'Used Virtual Memory';
    value: '37486';
  };
  SFREEVIRTMEM: {
    label: 'Free Virtual Memory';
    value: '10382';
  };
  SPROCESSES: {
    label: 'Processes';
    value: '427';
  };
  SUSERS: {
    label: 'Users';
    value: '1';
  };
  SDRVCUTI: {
    label: 'Drive C: Utilization';
    value: '70';
  };
  SDRVCUSEDSPC: {
    label: 'Drive C: Used Space';
    value: '1335';
  };
  SDRVCFREESPC: {
    label: 'Drive C: Free Space';
    value: '572';
  };
  SSMASTA: {
    label: 'SMART Status';
    value: 'OK';
  };
  SDSK1ACT: {
    label: 'Disk 1 Activity';
    value: '2';
  };
  SDSK1READSPD: {
    label: 'Disk 1 Read Speed';
    value: '0.0';
  };
  SDSK1WRITESPD: {
    label: 'Disk 1 Write Speed';
    value: '0.3';
  };
  SGPU1CLK: {
    label: 'GPU Clock';
    value: '2520';
  };
  SGPU1MEMCLK: {
    label: 'GPU Memory Clock';
    value: '21002';
  };
  SGPU1UTI: {
    label: 'GPU Utilization';
    value: '10';
  };
  SGPU1MCUTI: {
    label: 'GPU MC Utilization';
    value: '3';
  };
  SGPU1VEUTI: {
    label: 'GPU VE Utilization';
    value: '8';
  };
  SGPU1BIUTI: {
    label: 'GPU BI Utilization';
    value: '0';
  };
  SGPU1USEDDEMEM: {
    label: 'GPU Used Dedicated Memory';
    value: '5437';
  };
  SGPU1USEDDYMEM: {
    label: 'GPU Used Dynamic Memory';
    value: '205';
  };
  SGPU1BUSTYP: {
    label: 'GPU Bus Type';
    value: 'PCI-E 4.0 x16 @ 4.0 x16';
  };
  SGPU1PERFCAP: {
    label: 'GPU PerfCap Reason';
    value: 'Utilization';
  };
  SVMEMUSAGE: {
    label: 'Video Memory Utilization';
    value: '24';
  };
  SUSEDVMEM: {
    label: 'Used Video Memory';
    value: '5835';
  };
  SFREEVMEM: {
    label: 'Free Video Memory';
    value: '18729';
  };
  SSLISTA: {
    label: 'SLI Status';
    value: 'Disabled';
  };
  SPRIIPADDR: {
    label: 'Primary IP Address';
    value: '172.28.0.1';
  };
  SEXTIPADDR: {
    label: 'External IP Address';
    value: '163.53.18.230';
  };
  SNIC1DLRATE: {
    label: 'NIC1 Download Rate';
    value: '0.0';
  };
  SNIC1ULRATE: {
    label: 'NIC1 Upload Rate';
    value: '0.0';
  };
  SNIC1TOTDL: {
    label: 'NIC1 Total Download';
    value: '0.0';
  };
  SNIC1TOTUL: {
    label: 'NIC1 Total Upload';
    value: '0.0';
  };
  SNIC1CONNSPD: {
    label: 'NIC1 Connection Speed';
    value: '3';
  };
  SNIC2DLRATE: {
    label: 'NIC2 Download Rate';
    value: '0.0';
  };
  SNIC2ULRATE: {
    label: 'NIC2 Upload Rate';
    value: '0.0';
  };
  SNIC2TOTDL: {
    label: 'NIC2 Total Download';
    value: '0.0';
  };
  SNIC2TOTUL: {
    label: 'NIC2 Total Upload';
    value: '0.2';
  };
  SNIC2CONNSPD: {
    label: 'NIC2 Connection Speed';
    value: '10000';
  };
  SNIC3DLRATE: {
    label: 'NIC3 Download Rate';
    value: '4.5';
  };
  SNIC3ULRATE: {
    label: 'NIC3 Upload Rate';
    value: '3.4';
  };
  SNIC3TOTDL: {
    label: 'NIC3 Total Download';
    value: '663.9';
  };
  SNIC3TOTUL: {
    label: 'NIC3 Total Upload';
    value: '85.5';
  };
  SNIC3CONNSPD: {
    label: 'NIC3 Connection Speed';
    value: '2500';
  };
  SNIC4DLRATE: {
    label: 'NIC4 Download Rate';
    value: '0.0';
  };
  SNIC4ULRATE: {
    label: 'NIC4 Upload Rate';
    value: '0.0';
  };
  SNIC4TOTDL: {
    label: 'NIC4 Total Download';
    value: '0.0';
  };
  SNIC4TOTUL: {
    label: 'NIC4 Total Upload';
    value: '0.0';
  };
  SNIC5DLRATE: {
    label: 'NIC5 Download Rate';
    value: '0.0';
  };
  SNIC5ULRATE: {
    label: 'NIC5 Upload Rate';
    value: '0.0';
  };
  SNIC5TOTDL: {
    label: 'NIC5 Total Download';
    value: '0.0';
  };
  SNIC5TOTUL: {
    label: 'NIC5 Total Upload';
    value: '0.0';
  };
  SNIC6DLRATE: {
    label: 'NIC6 Download Rate';
    value: '0.0';
  };
  SNIC6ULRATE: {
    label: 'NIC6 Upload Rate';
    value: '0.0';
  };
  SNIC6TOTDL: {
    label: 'NIC6 Total Download';
    value: '0.0';
  };
  SNIC6TOTUL: {
    label: 'NIC6 Total Upload';
    value: '0.0';
  };
  SNIC7DLRATE: {
    label: 'NIC7 Download Rate';
    value: '0.0';
  };
  SNIC7ULRATE: {
    label: 'NIC7 Upload Rate';
    value: '0.0';
  };
  SNIC7TOTDL: {
    label: 'NIC7 Total Download';
    value: '0.0';
  };
  SNIC7TOTUL: {
    label: 'NIC7 Total Upload';
    value: '0.0';
  };
  SNIC7CONNSPD: {
    label: 'NIC7 Connection Speed';
    value: '100';
  };
  SDESKRES: {
    label: 'Desktop Resolution';
    value: '3840 x 2160';
  };
  SVREFRATE: {
    label: 'Vertical Refresh Rate';
    value: '160';
  };
  SMASTVOL: {
    label: 'Master Volume';
    value: '31';
  };
  SBATT: {
    label: 'Battery';
    value: 'No Battery';
  };
  SRTSSFPS: {
    label: 'RTSS FPS';
    value: '0';
  };
  TMOBO: {
    label: 'Motherboard';
    value: '31';
  };
  TCPU: {
    label: 'CPU';
    value: '43';
  };
  TCPUPKG: {
    label: 'CPU Package';
    value: '51';
  };
  TCPUIAC: {
    label: 'CPU IA Cores';
    value: '62';
  };
  TCPUGTC: {
    label: 'CPU GT Cores';
    value: '41';
  };
  'TCC-1-1': {
    label: 'CPU Core #1';
    value: '55';
  };
  'TCC-1-2': {
    label: 'CPU Core #2';
    value: '39';
  };
  'TCC-1-3': {
    label: 'CPU Core #3';
    value: '54';
  };
  'TCC-1-4': {
    label: 'CPU Core #4';
    value: '61';
  };
  'TCC-1-5': {
    label: 'CPU Core #5';
    value: '58';
  };
  'TCC-1-6': {
    label: 'CPU Core #6';
    value: '57';
  };
  'TCC-1-7': {
    label: 'CPU Core #7';
    value: '58';
  };
  'TCC-1-8': {
    label: 'CPU Core #8';
    value: '51';
  };
  'TCC-1-9': {
    label: 'CPU Core #9';
    value: '44';
  };
  'TCC-1-10': {
    label: 'CPU Core #10';
    value: '44';
  };
  'TCC-1-11': {
    label: 'CPU Core #11';
    value: '44';
  };
  'TCC-1-12': {
    label: 'CPU Core #12';
    value: '44';
  };
  'TCC-1-13': {
    label: 'CPU Core #13';
    value: '44';
  };
  'TCC-1-14': {
    label: 'CPU Core #14';
    value: '44';
  };
  'TCC-1-15': {
    label: 'CPU Core #15';
    value: '44';
  };
  'TCC-1-16': {
    label: 'CPU Core #16';
    value: '44';
  };
  'TCC-1-17': {
    label: 'CPU Core #17';
    value: '41';
  };
  'TCC-1-18': {
    label: 'CPU Core #18';
    value: '41';
  };
  'TCC-1-19': {
    label: 'CPU Core #19';
    value: '41';
  };
  'TCC-1-20': {
    label: 'CPU Core #20';
    value: '41';
  };
  'TCC-1-21': {
    label: 'CPU Core #21';
    value: '40';
  };
  'TCC-1-22': {
    label: 'CPU Core #22';
    value: '40';
  };
  'TCC-1-23': {
    label: 'CPU Core #23';
    value: '40';
  };
  'TCC-1-24': {
    label: 'CPU Core #24';
    value: '40';
  };
  TPCH: {
    label: 'PCH';
    value: '52';
  };
  TVRM: {
    label: 'VRM';
    value: '51';
  };
  TGPU1: {
    label: 'GPU';
    value: '36';
  };
  TGPU1HOT: {
    label: 'GPU Hotspot';
    value: '44';
  };
  TGPU1MEM: {
    label: 'GPU Memory';
    value: '42';
  };
  TDIMMTS2: {
    label: 'DIMM2';
    value: '42';
  };
  TDIMMTS4: {
    label: 'DIMM4';
    value: '41';
  };
  THDD1: {
    label: 'Predator SSD GM7 M.2 2TB';
    value: '43';
  };
  THDD1TS2: {
    label: 'Predator SSD GM7 M.2 2TB #2';
    value: '38';
  };
  FCPU: {
    label: 'CPU';
    value: '966';
  };
  FAIOPUMP: {
    label: 'AIO Pump';
    value: '2980';
  };
  FGPU1: {
    label: 'GPU';
    value: '999';
  };
  FGPU1GPU2: {
    label: 'GPU2';
    value: '1000';
  };
  DGPU1: {
    label: 'GPU';
    value: '30';
  };
  DGPU1GPU2: {
    label: 'GPU2';
    value: '30';
  };
  VCPU: {
    label: 'CPU Core';
    value: '1.341';
  };
  VCPUVID: {
    label: 'CPU VID';
    value: '1.365';
  };
  V33V: {
    label: '+3.3 V';
    value: '3.312';
  };
  VP5V: {
    label: '+5 V';
    value: '4.960';
  };
  VP12V: {
    label: '+12 V';
    value: '11.904';
  };
  V3VSB: {
    label: '+3.3 V Standby';
    value: '3.440';
  };
  VVDD: {
    label: 'VDD';
    value: '1.350';
  };
  VCPUL2: {
    label: 'CPU L2';
    value: '0.296';
  };
  VVCCINAUX: {
    label: 'VCCIN Aux';
    value: '1.776';
  };
  VVCCSA: {
    label: 'VCCSA';
    value: '1.280';
  };
  VGPU1: {
    label: 'GPU Core';
    value: '0.945';
  };
  CCPU: {
    label: 'CPU';
    value: '164.00';
  };
  PCPU: {
    label: 'CPU';
    value: '219.91';
  };
  PCPUPKG: {
    label: 'CPU Package';
    value: '85.52';
  };
  PCPUIAC: {
    label: 'CPU IA Cores';
    value: '74.89';
  };
  PGPU1: {
    label: 'GPU';
    value: '59.52';
  };
  PGPU1TDPP: {
    label: 'GPU TDP%';
    value: '13';
  };
  SUPTIMENS: {
    label: 'UpTime (HH:MM)';
    value: '02:56';
  };
  PCPUGTC: {
    label: 'CPU GT Cores';
    value: '10.64';
  };
};
