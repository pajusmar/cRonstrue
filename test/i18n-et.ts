import "mocha";
import { assert } from "chai";
import cronstrue from "../src/cronstrue-i18n";
import "../src/i18n/locales/et";

describe("et", function () {
  it("* * * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut"
    );
  });

  it("21-59 * * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Minutitel 21 kuni 59 pärast täistundi"
    );
  });

  it("10-15,21-37 * * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "10 kuni 15 ja 21 kuni 37. minutil pärast täistundi"
    );
  });

  it("0 0 1 1-12 *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, jaanuar kuni detsember"
    );
  });

  it("0 0 1 1 * 2020-2025", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, ainult jaanuar, 2020 kuni 2025"
    );
  });

  it("0 * * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga tund"
    );
  });

  it("0-59 0 * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut vahemikus 00:00 kuni 00:59"
    );
  });

  it("30 6,14,16 * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 06:30, 14:30 ja 16:30"
    );
  });

  it("5,10,15 1-5 */5 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "5, 10, ja 15. minutil pärast täistundi, vahemikus 01:00 kuni 05:59, igal 5. päeval"
    );
  });

  it("15-59/10 * */5 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga 10 minuti järel, minutitel 15 kuni 59 pärast täistundi, igal 5. päeval"
    );
  });

  it("*/5 * * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga 5 minuti järel"
    );
  });

  it("0 0 1-5 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. kuni 5. päeval"
    );
  });

  it("0 0 1 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval"
    );
  });

  it("0 0 L * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu viimasel päeval"
    );
  });

  it("0 0 * * MON", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, ainult esmaspäev"
    );
  });

  it("0 0 1 */2 *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, iga 2 kuu järel"
    );
  });

  it("0 0 1 1,11 *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, ainult jaanuar ja november"
    );
  });

  it("0 0 LW * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu viimasel tööpäeval"
    );
  });

  it("0 0 1W * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu esimene tööpäev"
    );
  });

  it("0 0 15W * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu tööpäeval, mis on lähim 15. päevale"
    );
  });

  it("0 0 1-5 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. kuni 5. päeval"
    );
  });

  it("0 0 1 1-12 *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, jaanuar kuni detsember"
    );
  });

  it("0 0 1 1 */2", function () {
    // FIXME:
    //  should this be "At 00:00 on day-of-month 1 if it's on every 2nd day-of-week in January."
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, iga 2. nädala päev, ainult jaanuar"
    );
  });

  it("0 0 * * 0-6", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, pühapäev kuni laupäev"
    );
  });

  it("0 0 * * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00"
    );
  });

  it("0 0 * * * 2020,2022", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, ainult 2020 ja 2022"
    );
  });

  it("* * L * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut, kuu viimasel päeval"
    );
  });

  it("* * L-5 * *", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut, 5 päeva enne kuu viimast päeva"
    );
  });

  it("* * * * 5L", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut, kuu viimasel reede"
    );
  });

  it("* * * * 5#3", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Iga minut, kolmas reede kuus"
    );
  });

  it("@yearly", function () {
    assert.equal(
      cronstrue.toString(this.test?.title as string, { locale: "et" }),
      "Kell 00:00, kuu 1. päeval, ainult jaanuar"
    );
  });
});
