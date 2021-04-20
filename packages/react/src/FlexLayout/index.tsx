import type React from 'react';

export interface FlexLayoutProps {
  required: any;
  optional?: any;
}

const FlexLayout = ({ required, optional="defaultValue" }: FlexLayoutProps) => {

  return <div>FlexLayout</div>
}

export default FlexLayout
