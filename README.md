# High School CEEB Scraper

A simple utility that scrapes a full list of College Entrance Examination
Board (CEEB) scores from the [College Board Code Search](https://sat.collegeboard.org/register/sat-code-search)
website.

## Usage

To use:

1. Clone the latest `git clone https://github.com/loganfranken/high-school-ceeb-scraper.git`
2. Run `npm install`
3. Run `npm start`

This will create a "output.txt" file with a tab-delimited list of all of the
codes.

Alternatively, you can run the script directly and output to the console:

`node high-school-ceeb-scraper.js`

Or a different file type:

`node high-school-ceeb-scraper.js > output.txt`

## Disclaimer

This project is neither endorsed by nor affiliated with College Board. It is the
responsibility of each individual institution to ensure they use this tool and
its output appropriately.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

By using this utility, you acknowledge that you have read and agree to these
terms.

## License

[ISC](https://opensource.org/licenses/ISC)
