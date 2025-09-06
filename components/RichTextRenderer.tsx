'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

export default function RichTextRenderer({ doc }: { doc: Document }) {
  if (!doc) return null;
  return (
    <div className="prose prose-gray max-w-none">
      {documentToReactComponents(doc)}
    </div>
  );
}
