from flask import Flask, render_template
import random


class Roulette:
    def __init__(self):
        self.pocket_colors = ["red", "black"]
        self.pocket_numbers = range(1, 37)

    def spin(self):
        return random.choice(self.pocket_colors), random.choice(self.pocket_numbers)


app = Flask(__name__)
roulette = Roulette()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/spin")
def spin():
    pocket_color, pocket_number = roulette.spin()
    return render_template("spin.html", color=pocket_color, number=pocket_number)


if __name__ == "__main__":
    app.run()
