function fixFiles(files) {
  return files.map((file, index) => {
    const filtered = files.slice(0, index).filter((filter) => file === filter);
    return filtered.length === 0 ? file : `${file}(${filtered.length})`;
  });
}
