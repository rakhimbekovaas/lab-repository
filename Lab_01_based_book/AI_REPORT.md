# AI Usage Report

## Tool Used
**OpenAI ChatGPT** - used it to clean/imporve up my code and make the README look better.

## Prompts I Used

### Prompt 1: Making code look better
```
(Attached code) improve stilistically my code so it is easier to read. 
Also rephrase comments, if needed, so that description is more clear
```

What ChatGPT did:
- Fixed formatting and indentation
- Made comments clearer
- Suggested better variable names
- Cleaned up redundant code

Files changed: `src/App.jsx`, `src/Counter.jsx`

### Prompt 2: Improving README
```
(Attached Readme.md and snapshot of project structure) Improve stilistically 
my Readme.md so its easier to read and more pleasent view. list Structure 
my project accurately in Readme.md + add if anything is left behind
```

What ChatGPT did:
- Reorganized sections to make more sense
- Added proper markdown formatting
- Created a project structure tree
- Made it look more professional

Files changed: `README.md`

## How I Verified the Code

Ran these commands to make sure everything still works (example):
```bash
cd task2_counter_app
npm run dev
```

Then I manually tested:
- Clicked increment button → counter went up ✓
- Clicked decrement button → counter went down ✓
- Checked the yellow highlight at count 5+ → worked ✓
- Made sure the layout looked centered → all good ✓

Everything worked fine, no errors in the console.

## What I Learned

**Code stuff:**
- Writing better comments actually helps when I come back to the code later
- Consistent formatting makes code way easier to read
- Good documentation matters - makes projects easier to understand

**About using AI:**
- You need to be specific with prompts to get good results
- Always test AI suggestions, don't just copy-paste
- AI is good for improvement, but I still need to understand what it's doing
- Attaching actual files works better than just describing the problem

**Markdown skills:**
- How to use code blocks properly
- Making tables in markdown
- Using emojis and formatting to make docs nicer

**What worked:**
- Saved time on formatting
- Learned some best practices
- README looks way more professional now

**What didn't:**
- Had to tweak some suggestions because they weren't perfect
- Still needed to verify everything manually
- Sometimes had to re-prompt for better results
