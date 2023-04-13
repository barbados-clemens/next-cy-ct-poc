import { defineConfig } from 'cypress';
import { nxComponentTestingPreset } from '@nrwl/next/plugins/component-testing';

export default defineConfig({
  component: nxComponentTestingPreset(__filename),
});
