import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/next/plugins/component-testing';

const c = nxComponentTestingPreset(__filename);
export default defineConfig({
  component: c,
});
