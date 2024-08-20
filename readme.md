# Window Merger Chrome Extension

## Overview

Window Merger is a Chrome extension that allows users to easily merge multiple Chrome windows into one. This tool is perfect for users who often work with many windows and want to consolidate their workspace quickly and efficiently.

## Features

- List all open Chrome windows
- Select multiple windows to merge
- Merge all tabs from selected windows into a single window
- User-friendly interface with improved styling
- Responsive design that handles any number of windows

## Installation

To install the Window Merger extension in developer mode:

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" button that appears after enabling developer mode.
5. Select the directory containing the extension files.
6. The Window Merger extension should now appear in your list of installed extensions.

## Usage

1. Click on the Window Merger icon in your Chrome toolbar to open the popup.
2. You will see a list of all your open Chrome windows, with the number of tabs in each window.
3. Select the windows you want to merge by checking the boxes next to them.
4. Click the "Merge Selected Windows" button at the bottom of the popup.
5. All tabs from the selected windows will be moved to the first selected window, and the other selected windows will be closed.

## Development

The extension consists of the following files:

- `manifest.json`: Contains metadata about the extension and its capabilities.
- `popup.html`: Defines the structure of the popup UI.
- `popup.js`: Handles the logic for the popup, including listing windows and initiating the merge.
- `background.js`: Contains the core functionality for merging windows.

To modify the extension:

1. Make changes to the relevant files.
2. If you modify `manifest.json`, you may need to reload the extension in `chrome://extensions/`.
3. For changes to `popup.html`, `popup.js`, or `background.js`, you can usually just click the refresh button on the extension in `chrome://extensions/`.

## Contributing

Contributions to the Window Merger extension are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to open an issue in this repository.

Enjoy using Window Merger!