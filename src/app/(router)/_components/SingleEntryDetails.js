"use client"
import { useState, useEffect } from 'react';
import { courseDetails } from '../../_utils/queries';
import { useParams } from 'next/navigation';


function SingleEntryDetails() {
    const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div>
      
    </div>
  )
}

export default SingleEntryDetails
