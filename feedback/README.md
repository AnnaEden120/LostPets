Hey Anna!

Hope you're doing well.

Just went through everything. I got the gist of what's going on. Your front end is nicely designed. Here are a few things to keep in mind:

-   You have the same small bug in the functions `seeTable` and `seeForm`. The problem is that when you click on the corresponding buttons in the page that are supposed to show the table/form when clicked on it doesn't start working until after clicking on the buttons twice. The reason for this is as following:
    Whenever you do `<element>.style.<some property name>`, you're only retrieving the element's **inline** style, meaning styles that are put directly on the element itself like:

    ```html
    <div id="el" style="color: red"></div>
    ```

    Only in this type of case, I could do:

    ```js
    document.getElementById('el').style.color;
    ```

    Therefore, although the style of the form and table in css is `visibility: hidden`, you won't see that by doing `style.visibility`. Only after the first click, when you actually set the inline style of those elements to `visibility: hidden` does your condition start working as expected.

    So, a more precise way to do this would be instead to use a class for visibility then toggle it, like: `el.classList.toggle('visible-class')`. Alternatively, you could do what you did, but change it to:

    ```js
    function seeTable() {
        if (getComputedStyle(tableDisplay).getPropertyValue('visibility') === 'hidden') {
            tableDisplay.style.visibility = 'visible';
        } else {
            tableDisplay.style.visibility = 'hidden';
        }
    }
    ```

---

That's it for now! If you need any help or have any questions, feel free to message me on slack anytime. :)
