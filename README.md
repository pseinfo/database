# Chemical Database `v1`

Free and open-source database of chemical elements, nuclides, compounds, and more.  
Visit: https://pse-info.de.

Openly accessible data source. Support is appreciated.  
Attribution when reusing helps raise visibility of the project.

## Project structure

- ### /data/
Where all actual data will be stored, easy to bundle and make path resolving for any basic API

- ### /automation-src/
Automation code in typescript, to help building, serving, checking, bundling... the database.

## Run automation scripts

This project is running automation scripts using the [Bun javascript runtime](https://bun.sh/)
Which you will need to install to run it.
Commands: 
```sh
# First step
# like npm install, to install all dependencies in node_modules/
bun install
# Then commands available
# Placeholder command
bun run-script # or bun run run-script
```

## CDN

Fetch data via open CDN:

```
https://cdn.jsdelivr.net/gh/pseinfo/database/{REQUEST}
```

Example requests:

```
https://cdn.jsdelivr.net/gh/pseinfo/database/elements/h/chemical.json
https://cdn.jsdelivr.net/gh/pseinfo/database/elements/fe/atomic.json
https://cdn.jsdelivr.net/gh/pseinfo/database/elements/au/physical.json
```

## License

© Copyright 2025 pse-info.de under the MIT license.
