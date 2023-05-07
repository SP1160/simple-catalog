# Simple catalog of products

It's just a catalog of products filtered by different characteristics. By way of example you can see how this process works using JavaScript.


## Tech Stack

- HTML
- CSS
- JavaScript
- [json-server](https://github.com/typicode/json-server)
## Features

- Displaying products via json-server
- A modal window with its detailed information is tied to each product
- Filtering of products according to different characteristics
- Form for custom adding products
## Installation

- Clone this repository to your local machine

```bash
git clone https://github.com/SP1160/simple-catalog.git
```

- Install the necessary dependencies

```bash
npm install
```
    
## Usage
- There are two stages of use - filtering products and adding product

### Start
- Start our server to display the products

```bash
npx json-server db.json
```

- Open file `index.html` in browser
- Choose the filter categories you want and click on the button `Search`

### Add product
- After you have opened the `index.html` file you can add the product if you click on `Add Product`
- You will be taken to a page with a form for filling in the product data
- After filling in all the data, click on the `Submit` button to add or the `Reset` button to clear the form
- If you filled it out correctly, an alert will pop up with the message `Product added successfully!`
- If you want to go back to the main page, just click on the `Comeback to main page` button.
## License

[MIT](https://choosealicense.com/licenses/mit/)