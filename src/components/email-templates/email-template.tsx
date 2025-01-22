import * as React from 'react';

export function EmailTemplate({ formData }: { 
  formData: Record<string, any> 
}) {
  return (
    <div>
      <h1>New Form Submission</h1>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  )
}