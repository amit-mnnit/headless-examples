

import Form from '../components/Form';
import Panel from '../components/Panel';
import TextField from '../components/TextField';
import Date from '../components/Date';
import PlainText from '../components/PlainText';
import Title from '../components/Title';
import Image from '../components/Image';
import Rating from '../components/Rating';
import Slider from '../components/Slider';
import TabsVerticalComp from '../components/TabsVerticalComp';
import TabsHorizontalComp from '../components/TabsHorizontalComp';
import Button from '../components/Button';
import Number from '../components/Number';
import DropDown from '../components/DropDown';
import AutoComplete from '../components/AutoComplete';
import Radiobutton from '../components/Radiobutton';
import CheckboxGroup from '../components/CheckboxGroup';
import Checkbox from '../components/Checkbox';
import Switch from '../components/Switch';
import Accordion from '../components/Accordion';
import Wizard from '../components/Wizard';

export default {
  form: Form,
  panel: Panel,
  'text-input': TextField,
  'date-input': Date,
  'plain-text': PlainText,
  'core/fd/components/form/title/v1/title': Title,
  image: Image,
  'core/fd/components/form/rating/v1/rating':Rating,
  'core/fd/components/form/slider/v1/slider':Slider,
  'core/fd/components/form/verticaltabs/v1/verticaltabs': TabsVerticalComp,
  'core/fd/components/form/tabsontop/v1/tabsontop': TabsHorizontalComp,
  'core/fd/components/form/wizard/v1/wizard': Wizard,
  button: Button,
  'number-input': Number,
  'drop-down': DropDown,
  'core/fd/components/form/autocomplete/v1/autocomplete':AutoComplete,
  'radio-group': Radiobutton,
  'checkbox-group': CheckboxGroup,
   checkbox: Checkbox,
  'core/fd/components/form/switch/v1/switch': Switch,
  'custom:accordion': Accordion,
  'custom:switch': Switch,
  'password-input': TextField,
  'multiline-input': TextField,
  email:TextField,
  'core/fd/components/form/accordion/v1/accordion': Accordion
};