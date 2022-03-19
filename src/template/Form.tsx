import { Button } from '../components/Button/Button';
import { Label } from '../form/Label';
import { LabelBoxButton } from '../form/LabelBoxButton';
import { LabelInput } from '../form/LabelInput';

const Form = () => (
  <div className="px-4 py-5 border-gray-200 bg-white rounded-md">
    <div className="text-lg font-semibold text-gray-800">Add user</div>
    <div className="mt-1">
      Start filling information below to create your new user
    </div>

    <LabelInput id="name" text="Name *">
      <input id="name" type="text" />
    </LabelInput>

    <LabelInput id="email" text="Email *">
      <input id="email" type="email" placeholder="john@example.com" />
    </LabelInput>

    <LabelInput id="age" text="Age *" sm>
      <input id="age" type="number" />
    </LabelInput>

    <LabelInput id="date" text="Birthday *" sm>
      <input id="date" type="date" />
    </LabelInput>

    <LabelInput id="datetime" text="Datetime (local) *" sm>
      <input id="datetime" type="datetime-local" />
    </LabelInput>

    <LabelInput id="month" text="Month" sm>
      <input id="month" type="month" />
    </LabelInput>

    <LabelInput id="time" text="Time" sm>
      <input id="time" type="time" />
    </LabelInput>

    <LabelInput id="website" text="Website">
      <input id="website" type="url" placeholder="https://example.com" />
    </LabelInput>

    <Label text="Operating system">
      <LabelBoxButton id="linux" text="Linux">
        <input id="linux" name="os" type="radio" />
      </LabelBoxButton>

      <LabelBoxButton id="windows" text="Windows">
        <input id="windows" name="os" type="radio" />
      </LabelBoxButton>

      <LabelBoxButton id="macos" text="macOS">
        <input id="macos" name="os" type="radio" />
      </LabelBoxButton>
    </Label>

    <LabelInput id="status" text="Status *">
      <select id="status">
        <option>Active</option>
        <option>Blocked</option>
      </select>
    </LabelInput>

    <LabelInput id="multiple" text="Multiple">
      <select id="multiple" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
      </select>
    </LabelInput>

    <LabelInput id="textarea" text="Additional comment">
      <textarea id="textarea" rows={5} />
    </LabelInput>

    <Label text="">
      <LabelBoxButton id="terms" text="I confirm that I have read the Terms">
        <input id="terms" type="checkbox" />
      </LabelBoxButton>
    </Label>

    <Label text="">
      <button type="submit">
        <Button>Submit</Button>
      </button>
    </Label>
  </div>
);

export { Form };
