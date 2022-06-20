import { Checkbox } from '../../../src/index';
import { Section } from '../components/Section';

export const Basic = () => {
  return (
    <>
      <h2>Kitchen Sink Example of the Basic PCR Features</h2>
      <Section>
        <p>Simple checkboxes</p>
        <Checkbox>Basic Checkbox</Checkbox>
        <Checkbox locked>Locked Checkbox</Checkbox>
        <Checkbox disabled>Disabled Checkbox</Checkbox>
      </Section>
      <Section>
        <p>Colors</p>
        <Checkbox color="primary">Primary</Checkbox>
        <Checkbox color="info">Info</Checkbox>
        <Checkbox color="warning">Warning</Checkbox>
        <Checkbox color="danger">Danger</Checkbox>
        <p>Outline Colors</p>
        <Checkbox color="primary-o">Primary</Checkbox>
        <Checkbox color="info-o">Info</Checkbox>
        <Checkbox color="warning-o">Warning</Checkbox>
        <Checkbox color="danger-o">Danger</Checkbox>
      </Section>
      <Section>
        <p>Icon Support</p>
        <Checkbox icon={<i className="mdi mdi-check" />}>mdi-check</Checkbox>
        <Checkbox icon={<i className="mdi mdi-close" />}>mdi-close</Checkbox>
      </Section>
      <Section>
        <p>Animations</p>
        <Checkbox animation="smooth">Smooth</Checkbox>
        <Checkbox animation="pulse">Pulse</Checkbox>
        <Checkbox icon={<i className="mdi mdi-check" />} animation="jelly">
          Jelly
        </Checkbox>
        <Checkbox icon={<i className="mdi mdi-check" />} animation="tada">
          Tada
        </Checkbox>
        <Checkbox icon={<i className="mdi mdi-check" />} animation="rotate">
          Rotate
        </Checkbox>
      </Section>
      <Section>
        <p>
          <code>plain</code> controls remove the border
        </p>
        <Checkbox
          animation="smooth"
          icon={<i className="mdi mdi-check" />}
          plain
        >
          Plain
        </Checkbox>
      </Section>
    </>
  );
};
