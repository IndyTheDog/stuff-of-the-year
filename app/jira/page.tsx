const Home = async () => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Basic ${process.env.JIRA_TOKEN}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  const getJiraData = async () => {
    const response = await fetch(
      'https://rebuiltfw.atlassian.net//rest/api/3/search?jql=project%3DDW%20and%20sprint%20in%20openSprints()%20and%20labels%20IN%20(dot%2Chipflat)',
      requestOptions
    )
    const jsonResponse = await response.json()
    return jsonResponse
  }

  const colorMe = (value: string) => {
    let color = ''
    if (value === 'Done') color = 'text-green-600'
    if (value === 'In Progress') color = 'text-orange-300'
    return <span className={color}>{value}</span>
  }

  const data = await getJiraData()
  const jiraInfo = [] as JSX.Element[]
  if (data.issues) {
    data.issues.forEach((element) => {
      const resolutionDate = new Date(element.fields.resolutiondate)
      const day = resolutionDate.getDate()
      const month = resolutionDate.getMonth()
      const year = resolutionDate.getFullYear()
      const el = (
        <tr className="border-secondary-color border-2">
          <td className="px-2 py-2 border-r-2">
            {element.fields.summary}
          </td>
          <td className="px-2 py-2  border-r-2">
            {element.fields.resolution
              ? colorMe(element.fields.resolution.name)
              : colorMe(element.fields.status?.name)}
          </td>
          <td className="px-2 py-2  border-r-2">
            {year != 1970 ? day + '-' + month + '-' + year : ''}
          </td>
          <td className="px-2 py-2 ">
            {element.fields.assignee.displayName}
          </td>
        </tr>
      )
      jiraInfo.push(el)
    })
  }

  return (
    <main className="text-slate-50 w-full px-10 pt-10">
      <h1 className="pb-10 text-2xl">Current Sprint</h1>
      <table>
        <thead>
          <th className="w-3/6">Story</th>
          <th className="w-1/6">Status</th>
          <th className="w-1/6">Completed</th>
          <th className="w-1/6">Main Assignee</th>
        </thead>
        {jiraInfo}
      </table>
    </main>
  )
}

export default Home
