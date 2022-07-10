import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ title, description, schema }) => (
  <Helmet htmlAttributes={{ lang: 'en' }} title={title} description={description} schema={schema} />
);
