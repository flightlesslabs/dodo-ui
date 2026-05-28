/**
 * Downloads text content as a file.
 *
 * @param content - File content as string
 * @param options - Download options
 * @param options.fileName - Name of the file without extension
 * @param options.extension - File extension (e.g. "scss", "txt", "json")
 * @param options.mimeType - MIME type of the file
 *
 * @example
 * downloadTextFile('$color: red;', {
 *   fileName: 'styles',
 *   extension: 'scss',
 *   mimeType: 'text/x-scss'
 * });
 *
 * @example
 * downloadTextFile(JSON.stringify({ hello: true }, null, 2), {
 *   fileName: 'data',
 *   extension: 'json',
 *   mimeType: 'application/json'
 * });
 */
export function downloadTextFile(
  content: string,
  {
    fileName,
    extension = 'txt',
    mimeType = 'text/plain',
  }: {
    fileName: string;
    extension?: string;
    mimeType?: string;
  },
): void {
  const blob = new Blob([content], {
    type: `${mimeType};charset=utf-8`,
  });

  const url = URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${fileName}.${extension}`;

  anchor.click();

  URL.revokeObjectURL(url);
}
