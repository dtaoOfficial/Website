let questions = [
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(s.length());\n    }\n}",
    "question": "What exception will be thrown when this code is executed?",
    "options": [
      "A. `IllegalStateException`",
      "B. `ArrayIndexOutOfBoundsException`",
      "C. `NullPointerException`",
      "D. `ClassCastException`"
    ],
    "answer": "C. `NullPointerException`. The code attempts to call the `length()` method on a `String` reference `s` that is `null`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[3]);\n    }\n}",
    "question": "What exception is thrown by this code?",
    "options": [
      "A. `NullPointerException`",
      "B. `IndexOutOfBoundsException`",
      "C. `ArrayIndexOutOfBoundsException`",
      "D. No exception, it prints 0."
    ],
    "answer": "C. `ArrayIndexOutOfBoundsException`. The array has indices 0, 1, and 2. Accessing index 3 is out of bounds."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 / 0);\n    }\n}",
    "question": "What exception will be thrown when attempting to divide by zero?",
    "options": [
      "A. `ArithmeticException`",
      "B. `NumberFormatException`",
      "C. `IllegalStateException`",
      "D. `Infinity` is printed."
    ],
    "answer": "A. `ArithmeticException`. Integer division by zero is an illegal arithmetic operation in Java."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Object obj = new Integer(100);\n        System.out.println((String) obj);\n    }\n}",
    "question": "What exception occurs when running this code?",
    "options": [
      "A. `NumberFormatException`",
      "B. `ClassCastException`",
      "C. `NullPointerException`",
      "D. `IllegalArgumentException`"
    ],
    "answer": "B. `ClassCastException`. An object of type `Integer` cannot be cast to an unrelated type like `String`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        s1.concat(\" Rules\");\n        System.out.println(s1);\n    }\n}",
    "question": "What is the output of this program?",
    "options": [
      "A. `Java Rules`",
      "B. `Java`",
      "C. `null`",
      "D. A compilation error."
    ],
    "answer": "B. `Java`. Strings in Java are immutable. The `concat()` method returns a new `String` object, but its result is not assigned back to `s1`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s1 = new String(\"hello\");\n        String s2 = new String(\"hello\");\n        System.out.print(s1 == s2);\n        System.out.print(\", \");\n        System.out.print(s1.equals(s2));\n    }\n}",
    "question": "What does this code print?",
    "options": [
      "A. `true, true`",
      "B. `true, false`",
      "C. `false, true`",
      "D. `false, false`"
    ],
    "answer": "C. `false, true`. The `==` operator compares object references, which are different for `s1` and `s2`. The `.equals()` method compares the actual string content, which is the same."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = \"hello\";\n        System.out.println(s1 == s2);\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `true`",
      "B. `false`",
      "C. A compilation error.",
      "D. The behavior is undefined."
    ],
    "answer": "A. `true`. String literals are stored in the Java String pool. Since `s1` and `s2` have the same literal value, they both point to the same object in the pool."
  },
{
    "code": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"a\", \"b\", \"c\"));\n        for (String s : list) {\n            if (\"b\".equals(s)) {\n                list.remove(s);\n            }\n        }\n    }\n}",
    "question": "What is the most likely result of running this code?",
    "options": [
      "A. The code removes `b` successfully.",
      "B. A `NullPointerException` is thrown.",
      "C. An `IndexOutOfBoundsException` is thrown.",
      "D. A `ConcurrentModificationException` is thrown."
    ],
    "answer": "D. A `ConcurrentModificationException` is thrown. You cannot modify a collection (e.g., by adding or removing elements) while iterating over it using an enhanced for-loop or an iterator."
  },
  {
    "code": "public class Main {\n    public static int test() {\n        try {\n            return 1;\n        } finally {\n            return 2;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(test());\n    }\n}",
    "question": "What will be printed to the console?",
    "options": [
      "A. `1`",
      "B. `2`",
      "C. A compilation error.",
      "D. The `finally` block suppresses the `try` block's return."
    ],
    "answer": "B. `2`. If a `finally` block includes a `return` statement, it will override any value returned from the `try` or `catch` blocks."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Integer a = 127;\n        Integer b = 127;\n        Integer c = 128;\n        Integer d = 128;\n        System.out.print(a == b);\n        System.out.print(\", \");\n        System.out.print(c == d);\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `true, true`",
      "B. `true, false`",
      "C. `false, true`",
      "D. `false, false`"
    ],
    "answer": "B. `true, false`. Java caches `Integer` objects for values between -128 and 127. Therefore, `a` and `b` point to the same cached object, but `c` and `d` point to different objects created on the heap."
  },
  {
    "code": "class MyObject {\n    int value = 10;\n}\n\npublic class Main {\n    public static void modify(MyObject ref) {\n        ref = new MyObject();\n        ref.value = 20;\n    }\n    public static void main(String[] args) {\n        MyObject myObj = new MyObject();\n        modify(myObj);\n        System.out.println(myObj.value);\n    }\n}",
    "question": "What value is printed by this program?",
    "options": [
      "A. `10`",
      "B. `20`",
      "C. `0`",
      "D. A `NullPointerException` occurs."
    ],
    "answer": "A. `10`. Java is pass-by-value. The `modify` method receives a copy of the reference. Reassigning `ref` inside the method points it to a new object, but this does not affect the original `myObj` reference in `main`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        int day = 2;\n        switch (day) {\n            case 1: System.out.print(\"Mon\");\n            case 2: System.out.print(\"Tue\");\n            case 3: System.out.print(\"Wed\");\n            default: System.out.print(\"End\");\n        }\n    }\n}",
    "question": "What is the output due to the missing `break` statements?",
    "options": [
      "A. `Tue`",
      "B. `TueWed`",
      "C. `TueWedEnd`",
      "D. A compilation error."
    ],
    "answer": "C. `TueWedEnd`. Without `break` statements, execution 'falls through' from a matching `case` to all subsequent cases and the `default` block."
  },
  {
    "code": "class A {\n    A() { System.out.print(\"A\"); }\n}\nclass B extends A {\n    B() { System.out.print(\"B\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new B();\n    }\n}",
    "question": "What is the output when a `new B()` is created?",
    "options": [
      "A. `A`",
      "B. `B`",
      "C. `AB`",
      "D. `BA`"
    ],
    "answer": "C. `AB`. A subclass constructor implicitly calls its superclass's no-argument constructor (`super()`) as its very first action, creating a chain of constructor calls up the inheritance hierarchy."
  },
  {
    "code": "import java.util.*;\n\nclass Person {\n    public String name;\n    public Person(String name) { this.name = name; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Set<Person> set = new HashSet<>();\n        set.add(new Person(\"John\"));\n        set.add(new Person(\"John\"));\n        System.out.println(set.size());\n    }\n}",
    "question": "What is the output, given that the `Person` class does not override `equals()` and `hashCode()`?",
    "options": [
      "A. `1`",
      "B. `2`",
      "C. `0`",
      "D. A compilation error."
    ],
    "answer": "B. `2`. Since `equals()` and `hashCode()` are not overridden, `HashSet` uses the default implementation from the `Object` class, which considers two objects equal only if they are the same instance. The two `Person` objects are distinct instances."
  },
  {
    "code": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<List<String>, String> map = new HashMap<>();\n        List<String> key = new ArrayList<>();\n        key.add(\"a\");\n        map.put(key, \"value1\");\n        key.add(\"b\"); // Key is mutated\n        System.out.println(map.get(key));\n    }\n}",
    "question": "What is the output of `map.get(key)` after the key has been mutated?",
    "options": [
      "A. `value1`",
      "B. An exception is thrown.",
      "C. `null`",
      "D. The behavior is unpredictable."
    ],
    "answer": "C. `null`. When a mutable object is used as a key in a `HashMap`, its `hashCode()` can change if the object is modified. After mutation, the `HashMap` looks for the key in a different hash bucket and fails to find it, returning `null`."
  },
  {
    "code": "class Parent {\n    public static void show() { System.out.println(\"Parent\"); }\n}\nclass Child extends Parent {\n    public static void show() { System.out.println(\"Child\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.show();\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `Parent`",
      "B. `Child`",
      "C. A compilation error.",
      "D. A runtime error."
    ],
    "answer": "A. `Parent`. `static` methods belong to the class, not the instance. The method call is resolved at compile time based on the reference type (`Parent`), not the actual object type (`Child`). This is known as method hiding."
  },
  {
    "code": "import java.util.stream.Stream;\n\npublic class Main {\n    public static void main(String[] args) {\n        Stream<String> stream = Stream.of(\"a\", \"b\", \"c\");\n        stream.forEach(System.out::println);\n        // Attempt to reuse the stream\n        long count = stream.count();\n        System.out.println(count);\n    }\n}",
    "question": "What happens when this code is executed?",
    "options": [
      "A. It prints a, b, c and then 3.",
      "B. It throws a `NullPointerException`.",
      "C. It throws an `IllegalStateException`.",
      "D. It prints a, b, c and then 0."
    ],
    "answer": "C. It throws an `IllegalStateException`. A Java Stream cannot be reused after a terminal operation (like `forEach` or `count`) has been performed on it."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        final int value = 10;\n        Runnable r = () -> {\n            // value = 20; // This line would cause an error\n            System.out.println(value);\n        };\n        r.run();\n    }\n}",
    "question": "Why must a local variable accessed by a lambda expression be `final` or `effectively final`?",
    "options": [
      "A. To prevent race conditions in multithreading.",
      "B. It's a performance optimization.",
      "C. The lambda captures the value of the variable, not the variable itself. To avoid confusion if the variable's value changes later, Java enforces this rule.",
      "D. To save memory."
    ],
    "answer": "C. The lambda captures the value of the variable, not the variable itself. To avoid confusion if the variable's value changes later, Java enforces this rule."
  },
  {
    "code": "public class Main {\n    public static boolean getFalse() {\n        System.out.print(\"F\");\n        return false;\n    }\n    public static boolean getTrue() {\n        System.out.print(\"T\");\n        return true;\n    }\n    public static void main(String[] args) {\n        if (getFalse() && getTrue()) { /* do nothing */ }\n    }\n}",
    "question": "What is printed to the console?",
    "options": [
      "A. `FT`",
      "B. `TF`",
      "C. `F`",
      "D. `T`"
    ],
    "answer": "C. `F`. The logical AND operator (`&&`) is short-circuiting. Since the left-hand expression (`getFalse()`) evaluates to `false`, the right-hand expression is never evaluated."
  },
  {
    "code": "import java.util.List;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> stringList = new ArrayList<>();\n        List<Integer> integerList = new ArrayList<>();\n        System.out.println(stringList.getClass() == integerList.getClass());\n    }\n}",
    "question": "What is the output of this program and why?",
    "options": [
      "A. `true`, because of type erasure.",
      "B. `false`, because they have different generic types.",
      "C. A compilation error.",
      "D. A runtime error."
    ],
    "answer": "A. `true`, because of type erasure. Generic type information is removed by the compiler at compile time. At runtime, both `stringList` and `integerList` are simply instances of the raw type `ArrayList`."
  },
  {
    "code": "class Parent {\n    private Parent() { System.out.println(\"Parent Constructor\"); }\n}\n\nclass Child extends Parent {\n    // No constructor defined\n}",
    "question": "What is the result of attempting to compile the `Child` class?",
    "options": [
      "A. It compiles successfully.",
      "B. It fails to compile because the implicit `super()` call cannot access the private `Parent` constructor.",
      "C. It compiles, but creating a `new Child()` will fail at runtime.",
      "D. It compiles, but `Child` inherits the private constructor."
    ],
    "answer": "B. It fails to compile because the implicit `super()` call cannot access the private `Parent` constructor."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Object obj = true ? new Integer(1) : new Double(2.0);\n        System.out.println(obj);\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `1`",
      "B. `1.0`",
      "C. `2.0`",
      "D. A compilation error."
    ],
    "answer": "B. `1.0`. The ternary operator determines a common type for its second and third operands. To make `Integer` and `Double` compatible, the `Integer` is promoted to a `Double`. Therefore, the expression evaluates to a `Double` with the value `1.0`."
  },
  {
    "code": "class Test {\n    static { int x = 1 / 0; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            Test t = new Test();\n        } catch (Throwable t) {\n            System.out.println(t.getClass().getName());\n        }\n    }\n}",
    "question": "What is the name of the error class that is caught?",
    "options": [
      "A. `java.lang.ArithmeticException`",
      "B. `java.lang.NoClassDefFoundError`",
      "C. `java.lang.ExceptionInInitializerError`",
      "D. `java.lang.RuntimeException`"
    ],
    "answer": "C. `java.lang.ExceptionInInitializerError`. Any exception that occurs inside a static initializer block is wrapped in an `ExceptionInInitializerError`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Object[] objArray = new String[1];\n        objArray[0] = new Integer(1);\n    }\n}",
    "question": "What is the result of executing this code?",
    "options": [
      "A. It compiles and runs without error.",
      "B. It fails to compile.",
      "C. It runs, but throws an `ArrayStoreException` at runtime.",
      "D. It runs, but throws a `ClassCastException` at runtime."
    ],
    "answer": "C. It runs, but throws an `ArrayStoreException` at runtime. Although it is valid at compile time to assign a `String[]` to an `Object[]` reference (covariance), the runtime checks the actual type of the array and prevents an `Integer` from being stored in a `String` array."
  },
  {
    "code": "public class Main {\n    public static void method(Object o) { System.out.println(\"Object\"); }\n    public static void method(String s) { System.out.println(\"String\"); }\n\n    public static void main(String[] args) {\n        method(null);\n    }\n}",
    "question": "Which overloaded method is called?",
    "options": [
      "A. `method(Object o)`",
      "B. `method(String s)`",
      "C. It results in a compilation error: Ambiguous method call.",
      "D. It throws a `NullPointerException`."
    ],
    "answer": "B. `method(String s)`. When resolving overloaded methods, the compiler chooses the most specific method that is applicable. Since `String` is a more specific type than `Object`, `method(String s)` is selected."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Integer i1 = Integer.valueOf(\"100\");\n        Integer i2 = Integer.valueOf(\"100\");\n        Integer i3 = new Integer(\"100\");\n\n        System.out.print(i1 == i2);\n        System.out.print(\", \");\n        System.out.print(i1 == i3);\n    }\n}",
    "question": "What is the output of this program?",
    "options": [
      "A. `true, true`",
      "B. `true, false`",
      "C. `false, true`",
      "D. `false, false`"
    ],
    "answer": "B. `true, false`. The static factory method `Integer.valueOf()` uses the integer cache for small values (-128 to 127), so `i1` and `i2` refer to the same object. The constructor `new Integer()` always creates a new object on the heap."
  },
  {
    "code": "interface A { default void show() { System.out.println(\"A\"); } }\ninterface B { default void show() { System.out.println(\"B\"); } }\n\nclass C implements A, B {\n    // Missing implementation\n}",
    "question": "What happens when you try to compile class `C`?",
    "options": [
      "A. It compiles successfully.",
      "B. A compilation error occurs because `C` inherits conflicting default methods.",
      "C. It compiles, but throws an exception at runtime when `show()` is called.",
      "D. It compiles, and a call to `show()` would default to the method from interface `A`."
    ],
    "answer": "B. A compilation error occurs because `C` inherits conflicting default methods. The class `C` must explicitly override the `show()` method to resolve the ambiguity of which default implementation to use."
  },
  {
    "code": "import java.util.*;\nimport java.util.Optional;\n\npublic class Main {\n    public String getDefault() {\n        System.out.print(\"MethodCalled\");\n        return \"default\";\n    }\n\n    public void test() {\n        Optional<String> opt = Optional.of(\"value\");\n        String v1 = opt.orElse(getDefault());\n        String v2 = opt.orElseGet(this::getDefault);\n    }\n}",
    "question": "When `test()` is executed, what is printed to the console?",
    "options": [
      "A. `MethodCalled`",
      "B. `MethodCalledMethodCalled`",
      "C. No output is printed.",
      "D. `value`"
    ],
    "answer": "A. `MethodCalled`. The argument to `orElse()` is *always* evaluated, even if the `Optional` contains a value. The `Supplier` passed to `orElseGet()` is only invoked if the `Optional` is empty."
  },
  {
    "code": "class MyResource implements AutoCloseable {\n    public void close() throws Exception {\n        throw new RuntimeException(\"From close()\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (MyResource r = new MyResource()) {\n            throw new IllegalArgumentException(\"From try\");\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
    "question": "What exception message is printed?",
    "options": [
      "A. `From close()`",
      "B. `From try`",
      "C. Both messages are printed.",
      "D. A `NullPointerException` occurs."
    ],
    "answer": "B. `From try`. In a try-with-resources statement, if an exception is thrown in both the `try` block and the `close()` method, the exception from the `try` block is the primary one that is propagated. The exception from `close()` is suppressed."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println('j' + 'a' + 'v' + 'a');\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `java`",
      "B. `418`",
      "C. A compilation error.",
      "D. The code prints the characters with spaces in between."
    ],
    "answer": "B. `418`. The `+` operator, when used with `char` types, performs integer addition based on their ASCII/Unicode values, not string concatenation. It calculates 106('j') + 97('a') + 118('v') + 97('a')."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        if (s instanceof String) {\n            System.out.println(\"Is a String\");\n        } else {\n            System.out.println(\"Is not a String\");\n        }\n    }\n}",
    "question": "What is the output of this code snippet?",
    "options": [
      "A. `Is a String`",
      "B. `Is not a String`",
      "C. A `NullPointerException` is thrown.",
      "D. A compilation error."
    ],
    "answer": "B. `Is not a String`. The `instanceof` operator always evaluates to `false` when the object reference on the left-hand side is `null`."
  },
  {
    "code": "class Counter {\n    public synchronized void instanceMethod() {\n        // locks on 'this' object\n    }\n    public static synchronized void staticMethod() {\n        // locks on 'Counter.class' object\n    }\n}",
    "question": "Can Thread A call `instanceMethod()` on a `Counter` object while Thread B simultaneously calls `staticMethod()` on the same `Counter` class?",
    "options": [
      "A. No, because both methods are synchronized.",
      "B. Yes, because they lock on different objects (the instance vs. the class).",
      "C. No, the static method's lock will block the instance method.",
      "D. This will result in a deadlock."
    ],
    "answer": "B. Yes, because they lock on different objects (the instance vs. the class). An instance method locks on the specific object instance (`this`), while a static method locks on the `Class` object (`Counter.class`). These are two different locks."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        i = i++;\n        System.out.println(i);\n    }\n}",
    "question": "What is the final value of `i` that gets printed?",
    "options": [
      "A. `1`",
      "B. `0`",
      "C. `-1`",
      "D. The behavior is undefined."
    ],
    "answer": "B. `0`. The post-increment operator `i++` first evaluates to the original value of `i` (which is 0) and then increments `i` to 1. However, the assignment `i = ...` then assigns the *original* evaluated value (0) back to `i`."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Hello\");\n        } catch(Exception e) {\n            System.out.println(\"Caught\");\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
    "question": "What is the output of this try-catch-finally block?",
    "options": [
      "A. `Hello`",
      "B. `Hello, Finally`",
      "C. `Hello, Caught, Finally`",
      "D. `Finally`"
    ],
    "answer": "B. `Hello, Finally`. The `finally` block executes regardless of whether an exception was thrown or caught. Since no exception occurs in the `try` block, the `catch` block is skipped."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(Math.min(Double.MIN_VALUE, 0.0d));\n    }\n}",
    "question": "What is the output of this program?",
    "options": [
      "A. `0.0`",
      "B. `4.9E-324` (which is Double.MIN_VALUE)",
      "C. It results in a compilation error.",
      "D. It throws an `ArithmeticException`."
    ],
    "answer": "A. `0.0`. `Double.MIN_VALUE` is the smallest *positive* non-zero value a double can have. `0.0d` is smaller than this tiny positive number."
  },
  {
    "code": "import java.util.HashSet;\n\npublic class Main {\n    public static void main(String[] args) {\n        HashSet<Short> set = new HashSet<>();\n        for (short i = 0; i < 100; i++) {\n            set.add(i);\n            set.remove(i - 1);\n        }\n        System.out.println(set.size());\n    }\n}",
    "question": "What is the output of this code snippet?",
    "options": [
      "A. `0`",
      "B. `1`",
      "C. `100`",
      "D. `99`"
    ],
    "answer": "C. `100`. The expression `i - 1` results in an `int`, not a `short`. When `i` is 0, `remove(-1)` is called. Since `-1` is an `int`, autoboxing creates an `Integer`, not a `Short`. The `remove(Object)` method will not find an `Integer` in a `HashSet<Short>`, so nothing is removed. This happens for every iteration."
  },
  {
    "code": "public class Main {\n    static {\n        System.out.print(\"S\");\n    }\n    {\n        System.out.print(\"I\");\n    }\n    public Main() {\n        System.out.print(\"C\");\n    }\n    public static void main(String[] args) {\n        Main m1 = new Main();\n        Main m2 = new Main();\n    }\n}",
    "question": "What is the complete output of this program?",
    "options": [
      "A. `SICC`",
      "B. `SICIC`",
      "C. `SCIC`",
      "D. `SSICIC`"
    ],
    "answer": "B. `SICIC`. The `static` block runs once when the class is first loaded. The instance initializer block (`{...}`) and the constructor run in that order for every new instance created."
  },
  {
    "code": "public class Main {\n    public void overloaded(int x) {\n        System.out.println(\"int\");\n    }\n    public void overloaded(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        new Main().overloaded('a');\n    }\n}",
    "question": "Which overloaded method is called?",
    "options": [
      "A. `overloaded(int x)`",
      "B. `overloaded(long x)`",
      "C. Compilation Error: Ambiguous call.",
      "D. Neither, a `char` version is needed."
    ],
    "answer": "A. `overloaded(int x)`. Java will perform a widening primitive conversion. Since a `char` can be widened to an `int` without loss of information, and `int` is more specific than `long`, the `int` version is chosen."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"a\";\n        str += \"b\";\n        System.out.println(str == \"ab\");\n    }\n}",
    "question": "What is the output of this code?",
    "options": [
      "A. `true`",
      "B. `false`",
      "C. A compilation error.",
      "D. The behavior depends on the JVM."
    ],
    "answer": "B. `false`. The literal `\"ab\"` is in the string pool. The expression `str += \"b\"` creates a new `String` object on the heap (usually via a `StringBuilder` implicitly). Therefore, the references are not the same."
  },
  {
    "code": "import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(1, 2, 3);\n        list.add(4); // The problematic line\n        System.out.println(list);\n    }\n}",
    "question": "What is the result of running this code?",
    "options": [
      "A. It prints `[1, 2, 3, 4]`.",
      "B. It throws a `NullPointerException`.",
      "C. It throws an `UnsupportedOperationException`.",
      "D. It throws an `IllegalArgumentException`."
    ],
    "answer": "C. It throws an `UnsupportedOperationException`. The `List` returned by `Arrays.asList()` is a fixed-size list backed by the original array. It does not support structural modifications like adding or removing elements."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        int x = Integer.MAX_VALUE;\n        System.out.println(x + 1);\n    }\n}",
    "question": "What is the output of this program?",
    "options": [
      "A. It throws an `ArithmeticException` for overflow.",
      "B. `2147483648`",
      "C. `0`",
      "D. `-2147483648`"
    ],
    "answer": "D. `-2147483648`. Java integers do not throw an exception on overflow. Instead, the value wraps around from the maximum positive value to the minimum negative value."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        double d = 10 / 0.0;\n        System.out.println(d);\n    }\n}",
    "question": "What is the result of dividing an integer by a floating-point zero?",
    "options": [
      "A. It throws an `ArithmeticException`.",
      "B. `Infinity`",
      "C. `NaN` (Not a Number)",
      "D. `0.0`"
    ],
    "answer": "B. `Infinity`. Unlike integer division, floating-point division by zero is well-defined in Java and results in `Infinity` or `-Infinity`."
  },
  {
    "code": "public class Main {\n    public static void main(String args[]) {\n        // The line below has a subtle bug\n        long l = 24 * 60 * 60 * 1000 * 1000;\n        System.out.println(l);\n    }\n}",
    "question": "Why does this code produce an incorrect value for the number of microseconds in a day?",
    "options": [
      "A. The `long` data type is too small to hold the result.",
      "B. The entire right-hand side calculation is performed using `int` arithmetic, which overflows before the result is assigned to the `long`.",
      "C. Floating point precision is required for this calculation.",
      "D. The multiplication order is wrong."
    ],
    "answer": "B. The entire right-hand side calculation is performed using `int` arithmetic, which overflows before the result is assigned to the `long`. To fix this, at least one of the numbers should be a `long` literal (e.g., `24L`)."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"A\" + \"B\");\n        System.out.println('A' + 'B');\n    }\n}",
    "question": "What are the two lines of output?",
    "options": [
      "A. `AB` and `AB`",
      "B. `AB` and `131`",
      "C. `A B` and `65 66`",
      "D. A compilation error."
    ],
    "answer": "B. `AB` and `131`. The first `+` performs string concatenation. The second `+` operates on `char` types, performing integer addition based on their ASCII values (65 + 66)."
  },
  {
    "code": "public class Main {\n    private static String s;\n    public static void main(String[] args) {\n        System.out.println(s);\n    }\n}",
    "question": "What is printed to the console?",
    "options": [
      "A. An empty string.",
      "B. `null`",
      "C. A `NullPointerException` is thrown.",
      "D. A compilation error because `s` is not initialized."
    ],
    "answer": "B. `null`. Static member variables (fields) of a class are automatically initialized to their default values if not explicitly initialized. The default value for any object reference type, including `String`, is `null`."
  },
  {
    "code": "interface Animal { String sound(); }\n\nclass Cat implements Animal {\n    public String sound() { return \"Meow\"; }\n}\n\nclass Dog implements Animal {\n    public String sound() { return \"Woof\"; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        // if (a instanceof Dog d) { // Java 16+ Pattern Matching\n        //     System.out.println(\"It's a Dog\");\n        // }\n    }\n}",
    "question": "In this classic example of polymorphism, why is `a.sound()` guaranteed to call the `Cat`'s version of the method?",
    "options": [
      "A. Because `Cat` was implemented last.",
      "B. This is method hiding.",
      "C. This is method overriding. The JVM determines at runtime which method to call based on the actual object's type, not the reference's type.",
      "D. Because `a` is declared as type `Animal`."
    ],
    "answer": "C. This is method overriding. The JVM determines at runtime which method to call based on the actual object's type, not the reference's type."
  },
  {
    "code": "import java.util.concurrent.atomic.AtomicInteger;\n\npublic class Main {\n    private int count = 0;\n    private AtomicInteger atomicCount = new AtomicInteger(0);\n\n    public void increment() { count++; }\n    public void atomicIncrement() { atomicCount.incrementAndGet(); }\n}",
    "question": "In a multithreaded context, what is the primary problem with the `increment()` method that `atomicIncrement()` solves?",
    "options": [
      "A. The `increment()` method is slower.",
      "B. The `increment()` method is not a race condition; `count++` is an atomic operation.",
      "C. The `increment()` method has a race condition because `count++` is not atomic (it's a read-modify-write sequence). `AtomicInteger` provides thread-safe, atomic operations.",
      "D. `AtomicInteger` uses less memory."
    ],
    "answer": "C. The `increment()` method has a race condition because `count++` is not atomic (it's a read-modify-write sequence). `AtomicInteger` provides thread-safe, atomic operations."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        Integer a = 10; // autoboxing\n        int b = a;      // unboxing\n\n        Integer x = null;\n        int y = x; // The problematic line\n    }\n}",
    "question": "What happens at the line `int y = x;`?",
    "options": [
      "A. `y` becomes 0.",
      "B. A compilation error occurs.",
      "C. A `NullPointerException` is thrown at runtime.",
      "D. `y` becomes `null`, which is not possible for an `int`."
    ],
    "answer": "C. A `NullPointerException` is thrown at runtime. The line attempts to unbox a `null` `Integer` reference into a primitive `int`, which is equivalent to calling `x.intValue()`. This causes an NPE."
  },
  {
    "code": "public class Main {\n    public static void main(String[] args) {\n        final var x = \"Hello\";\n        // x = \"World\"; // Does this line compile?\n    }\n}",
    "question": "If the commented-out line were included, would the code compile? Why or why not?",
    "options": [
      "A. Yes, `var` is mutable.",
      "B. No, `var` infers the type, but `final` makes the variable immutable, so it cannot be reassigned.",
      "C. No, `var` cannot be used with `final`.",
      "D. Yes, `final` only applies to the initial value."
    ],
    "answer": "B. No, `var` infers the type, but `final` makes the variable immutable, so it cannot be reassigned."
  }
];

// 🎲 Shuffle the questions randomly
questions = questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function startExam() {
  const name = document.getElementById("userName").value.trim();
  if (name === "") return alert("Please enter your name!");

  localStorage.setItem("userName", name);
  document.getElementById("namePrompt").style.display = "none";
  document.getElementById("questionBox").style.display = "block";

  // ✅ Shuffle freshly every time user enters
  questions = questions.sort(() => Math.random() - 0.5);

  // ✅ Set total questions dynamically
  document.getElementById("totalQuestions").innerText = String(questions.length).padStart(2, '0');

  loadQuestion();
}


function loadQuestion() {
  const q = questions[currentQuestion];

  // ✅ Show question number and total
  document.getElementById("questionIndex").innerText = String(currentQuestion + 1).padStart(2, '0');
  document.getElementById("totalQuestions").innerText = String(questions.length).padStart(2, '0');

  // ✅ Show code + question
  document.getElementById("questionText").innerHTML = `
    <pre><code>${q.code}</code></pre>
    <p style="margin-top: 1rem;">${q.question}</p>
  `;

  // ✅ Show options
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    container.appendChild(btn);
  });
}


function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endExam();
  }
}

function endExam() {
  const box = document.getElementById("questionBox");
  box.innerHTML = `
    <div class="finished-animate">
      <h2>🎉 Exam Finished!</h2>
      <p>Your Score: <strong>${score}/${questions.length}</strong></p>
    </div>
  `;
}
