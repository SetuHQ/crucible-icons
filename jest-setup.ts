import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { configure as configureRTL } from '@testing-library/dom';

configureRTL({
  testIdAttribute: 'data-test',
});
  