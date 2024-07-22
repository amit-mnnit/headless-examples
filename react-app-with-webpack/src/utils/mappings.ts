
import { mappings } from "@aemforms/af-react-vanilla-components";

const customMappings: any = {
  ...mappings,
  "forms-components-examples/components/form/wizard": mappings["core/fd/components/form/wizard/v1/wizard"],
  "forms-components-examples/components/form/accordion": mappings["core/fd/components/form/accordion/v1/accordion"],
  "forms-components-examples/components/form/tabsontop": mappings["core/fd/components/form/tabsontop/v1/tabsontop"],
  "forms-components-examples/components/form/verticaltabs": mappings["core/fd/components/form/verticaltabs/v1/verticaltabs"],
  "forms-components-examples/components/form/panelcontainer": mappings["core/fd/components/form/panelcontainer/v1/panelcontainer"]

};

export default customMappings;