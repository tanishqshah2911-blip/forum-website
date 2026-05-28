import ProductTheater from './ProductTheater';

const LABELS = [
  { id: 'illum',   side: 'left',  y: 4,  title: 'Illumination Panel' },
  { id: 'cam',     side: 'right', y: 14, title: 'Camera Area' },
  { id: 'screen',  side: 'left',  y: 24, title: 'Touchscreen Interface' },
  { id: 'core',    side: 'right', y: 34, title: 'Raspberry Pi / Processing Core' },
  { id: 'rfid',    side: 'left',  y: 46, title: 'RFID Module' },
  { id: 'fin',     side: 'right', y: 54, title: 'Fingerprint Scanner' },
  { id: 'power',   side: 'left',  y: 66, title: 'Power Board' },
  { id: 'net',     side: 'right', y: 74, title: 'Network Module' },
  { id: 'fan',     side: 'left',  y: 84, title: 'Cooling Fan' },
  { id: 'logs',    side: 'right', y: 92, title: 'Attendance Controller / Logs Module' }
];

export default function AttendanceTheater() {
  return (
    <ProductTheater
      image="/attendance.png"
      imageX="/attendance_xray.png"
      labels={LABELS}
    />
  );
}
