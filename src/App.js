import './App.css';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import Alert from './Components/Alert/Alert';
import Container from './Components/Container/Container';
import Box from './Components/Box/Box';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];

export default function App() {
  return (
    <Container>
      <h2>Paintings</h2>

      <ColorPicker options={colorPickerOptions} />

      <h2>Alerts</h2>
      <Alert text="LOST DATA" type="success" />
      <Alert text="LOST DATA" type="warning" />
      <Alert text="LOST DATA" type="error" />

      <h2>Custom Boxes</h2>
      <Box type="small" />
      <Box type="medium" />
      <Box type="large" />
    </Container>
  );
}
