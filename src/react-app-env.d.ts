/// <reference types="react-scripts" />

declare module 'ckeditor4-react' {
  import * as React from 'react';

  export interface CKEditorProps {
    data: string;
  }

  export default class CKEditor extends React.Component<CKEditorProps, any> {}
}