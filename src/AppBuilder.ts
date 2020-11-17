import * as nocturnal from "../lib/Nocturnal"

class RootHTMLExample extends nocturnal.AppBuilder
{
    public async Build(name: string)
    {
        let app = new nocturnal.App();
        
        let html = new nocturnal.HTMLRootComponent("index.html")
        let head = new nocturnal.HTMLHeadComponent("index.html", new nocturnal.List<nocturnal.Attribute>());
        let body = new nocturnal.HTMLBodyComponent("index.html", new nocturnal.List<nocturnal.Attribute>());
        
        // HEAD

        let title = new nocturnal.HTMLTitleComponent("index.html", name);
        head.AddComponent(title);

        let css = new nocturnal.HTMLStyleComponent("index.html", "styles.css");
        head.AddComponent(css);

        // BODY

        let script = new nocturnal.HTMLScriptFileComponent("index.html", "app.js");
        body.AddComponent(script);

        let header = new nocturnal.HTMLHeaderComponent("index.html", "Hello, Nocturnal!");
        body.AddComponent(header);

        html.AddComponent(head);
        html.AddComponent(body);

        app.AddComponent(html);

        await app.Build();
    }
}

let builder = new RootHTMLExample();
builder.Build("Hello, World!");