function main() {
    // akses kanvas atau media untuk menggambar
    var canvas = document.getElementById("myCanvas");
    // siapkan tools untuk menggambar
    var contex = canvas.getContext("webgl");

    // membuat titik
    var vertexShaderCode = `
    void main(){
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 10.0;
    }`;

    // membuat titik tsb
    var vertexShader = contex.createShader(contex.VERTEX_SHADER);
    contex.shaderSource(vertexShader, vertexShaderCode);
    contex.compileShader(vertexShader);

    // mendefinisikan fragment
    var fragmentShaderCode = `
    void main(){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;

    // membuat warna
    var fragmentShader = contex.createShader(contex.FRAGMENT_SHADER);
    contex.shaderSource(fragmentShader, fragmentShaderCode);
    contex.compileShader(fragmentShader);

    // membuat package program agar data bisa dieksekusi
    var shaderProgram = contex.createProgram();
    contex.attachShader(shaderProgram, vertexShader);
    contex.attachShader(shaderProgram, fragmentShader);
    contex.linkProgram(shaderProgram);
    contex.useProgram(shaderProgram);

    // mendefinisikan background
    contex.clearColor(1.0, 1.0, 1.0, 1.0);
    contex.clear(gl.COLOR_BUFFER_BIT);

    contex.drawArrays(contex.POINTS, 0, 1);
}