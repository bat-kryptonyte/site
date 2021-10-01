<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pq6</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h2 id="objects-continued">Objects, Continued</h2>
<h3 id="simple-hummingbird-inheritance">Simple Hummingbird Inheritance</h3>
<pre><code>public class Hummingbird extends Bird {
	private double rate;
	public Hummingbird(double x) {
		super("hummingbird");
		assert x &gt; 0;
		rate = x;
	}
	public String toString() {
		return "This hummingbird flaps " + rate + " beat fast";
	}
}

</code></pre>
<h3 id="longest-string">Longest String</h3>
<pre><code>public class Longest {
	private int count;
	private String x;
	public Longest(String y) {
		assert y != null;
		count = y.length();
		x = y;
	}
	public void add(String y) {
		try {
			if (y.length() &gt; count) {
				count = y.length();
				x = y;
			}
		} catch(NullPointerException e) {
			 throw e;
		}
	public String current() {
		return x;
	}
}

</code></pre>
<h3 id="dog-is-younger">Dog Is Younger</h3>
<pre><code>public class Dog {
	private int age;
	public Dog(int x) {
		assert x &gt;= 0;
		age = x;
	}
	public static boolean isYounger(Dog a, Dog b) {
		assert a != null;
		assert b != null;
		return a.age &lt; b.age;
	}
}
</code></pre>
</div>
</body>

</html>
